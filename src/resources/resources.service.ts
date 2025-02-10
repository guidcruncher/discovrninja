/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { WeatherCodes } from "@customtypes/weathercodes";
import { DownloadResult, FluentHttpClient } from "@helpers/fluenthttpclient";
import { HttpUtilities } from "@helpers/httputilities";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import FeedParser from "feedparser";
import { fetchWeatherApi } from "openmeteo";
import Parser from "rss-parser";

@Injectable()
export class ResourcesService {
  private readonly logger = new Logger(ResourcesService.name);

  constructor(private configService: ConfigService) {}

  public async getPlaylist(playlists): Promise<any[]> {
    const toArray = function (a) {
      if (!!a && a.constructor === Array) {
        return a;
      }
      const b = [];
      b.push(a);
      return b;
    };
    const urls = toArray(playlists);
    return new Promise<any[]>((resolve, reject) => {
      const promises = [];
      urls.forEach((url) => {
        promises.push(
          new Promise<any[]>((resolve, reject) => {
            this.proxy(url)
              .then((v) => {
                const result = [];
                const txt = new TextDecoder().decode(
                  v.data.subarray(0, v.data.length),
                );
                const lines: string[] = txt.split("\n");
                if (lines.length <= 0) {
                  this.logger.error("Empty response", url);
                  resolve(result);
                  return;
                }

                if (lines[0] != "#EXTM3U") {
                  this.logger.error("Not a valid playlist", url);
                  resolve(result);
                  return;
                }
                let curr = null;
                for (let i = 1; i < lines.length; i++) {
                  const l = lines[i];
                  if (l.startsWith("#EXTINF")) {
                    if (curr) {
                      result.push(curr);
                    }
                    const arr = l.split(",");
                    curr = { title: arr[1], url: "" };
                  } else {
                    if (!l.endsWith(".mpd")) {
                      if (curr) {
                        curr.url = l;
                      }
                    } else {
                      curr = null;
                    }
                  }
                }

                if (curr) {
                  result.push(curr);
                }
                resolve(result);
              })
              .catch((err) => {
                this.logger.error("Error processing " + url, err);
                reject(err);
              });
          }),
        );
      });

      Promise.allSettled(promises)
        .then((r) => {
          let data = [];
          r.forEach((item) => {
            if (item.status == "fulfilled") {
              data = data.concat(item.value);
            }
          });
          resolve(
            data.sort((a, b) => {
              return a.title.localeCompare(b.title);
            }),
          );
        })
        .catch((err) => {
          this.logger.error("Error in getPlaylist", err);
          reject(err);
        });
    });
  }

  public proxy(url: string): Promise<DownloadResult> {
    return new Promise<DownloadResult>((resolve, reject) => {
      this.logger.debug("Proxying " + url);
      const client = FluentHttpClient.Get(url)
        .Download()
        .then((downloadResult) => {
          resolve(downloadResult);
        })
        .catch((err) => {
          this.logger.error("Error Proxying " + url, err);
          reject(err);
        });
    });
  }

  public reverseGeoCodeLookup(lat: number, long: number): Promise<any> {
    const apiUrl =
      "https://nominatim.openstreetmap.org/reverse?lat=" +
      lat +
      "&lon=" +
      long +
      "&format=json";
    const client = new HttpUtilities();

    return new Promise<any>((resolve, reject) => {
      client
        .retrieve("GET", apiUrl)
        .then((response) => {
          const geodata = JSON.parse(response);
          resolve(geodata);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public wikipediaSearch(
    lang: string,
    query: string,
    limit: number,
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl =
        "https://" +
        lang.toLowerCase() +
        "wikipedia.org/w/api.php?action=opensearch&search=" +
        encodeURIComponent(query) +
        "&format=json&limit=" +
        limit.toString();
      const client: HttpUtilities = new HttpUtilities();
      client
        .retrieve("GET", apiUrl)
        .then((jsonData) => {
          const parsed: any = JSON.parse(jsonData);
          const result = { searchTerm: parsed[0], results: [] };

          parsed[1].forEach((url, i) => {
            const entry = {
              url: url,
              description: parsed[2][i],
              title: parsed[3][i],
            };
            result.results.push(entry);
          });
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public fetchWikipediaPage(lang: string, page: string): Promise<any> {
    const apiUrl =
      "https://" +
      lang.toLowerCase() +
      ".wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=" +
      encodeURIComponent(page) +
      "&format=json";
    const client: HttpUtilities = new HttpUtilities();
    return new Promise<string>((resolve, reject) => {
      client
        .retrieve("GET", apiUrl)
        .then((jsonData) => {
          try {
            if (jsonData) {
              const parsed = JSON.parse(jsonData);
              resolve(parsed);
            } else {
              reject();
            }
          } catch (err) {
            reject(err);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public fetchWeather(lat: number, long: number, days: number): Promise<any> {
    return new Promise((resolve, reject) => {
      if (isNaN(lat) || isNaN(long)) {
        this.determineLocation(lat, long)
          .then((loc) => {
            this._fetchWeather(loc.latitude, loc.longitude, days)
              .then((weather) => {
                resolve(weather);
              })
              .catch((err) => {
                this.logger.error("Error fetching weather", err);
                reject();
              });
          })
          .catch((err) => {
            this.logger.error("Error fetching weather location", err);
            reject();
          });
      } else {
        return this._fetchWeather(lat, long, days)
          .then((weather) => {
            resolve(weather);
          })
          .catch((err) => {
            this.logger.error("Error fetching weather", err);
            reject(err);
          });
      }
    });
  }

  public _fetchWeather(lat: number, long: number, days: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const params = {
        latitude: lat,
        longitude: long,
        forecast_days: isNaN(days) ? 7 : days,
        current: [
          "temperature_2m",
          "is_day",
          "precipitation",
          "weather_code",
          "surface_pressure",
          "wind_speed_10m",
          "wind_direction_10m",
        ],
        hourly: "temperature_2m",
        daily: [
          "weather_code",
          "temperature_2m_max",
          "sunrise",
          "sunset",
          "precipitation_sum",
          "precipitation_probability_max",
          "wind_speed_10m_max",
          "wind_gusts_10m_max",
          "wind_direction_10m_dominant",
        ],
        wind_speed_unit: "mph",
        models: "best_match",
      };
      const url = "https://api.open-meteo.com/v1/forecast";

      fetchWeatherApi(url, params)
        .then((responses) => {
          // Helper function to form time ranges
          const range = (start: number, stop: number, step: number) =>
            Array.from(
              { length: (stop - start) / step },
              (_, i) => start + i * step,
            );

          // Process first location. Add a for-loop for multiple locations or weather models
          const response = responses[0];

          // Attributes for timezone and location
          const utcOffsetSeconds = response.utcOffsetSeconds();
          const timezone = response.timezone();
          const timezoneAbbreviation = response.timezoneAbbreviation();
          const latitude = response.latitude();
          const longitude = response.longitude();

          const current = response.current()!;
          const hourly = response.hourly()!;
          const daily = response.daily()!;

          // Note: The order of weather variables in the URL query and the indices below need to match!
          const weatherData = {
            current: {
              time: new Date(
                (Number(current.time()) + utcOffsetSeconds) * 1000,
              ),
              temperature2m: current.variables(0)!.value(),
              isDay: current.variables(1)!.value(),
              precipitation: current.variables(2)!.value(),
              weatherCode: current.variables(3)!.value(),
              weather: this.getWeatherDesc(
                current.variables(3)!.value(),
                current.variables(1)!.value(),
                new Date(
                  (Number(current.time()) + utcOffsetSeconds) * 1000,
                ).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                }),
              ),
              surfacePressured: current.variables(4)!.value(),
              windSpeed10m: current.variables(5)!.value(),
              windDirection10m: current.variables(6)!.value(),
            },
            daily: {
              time: range(
                Number(daily.time()),
                Number(daily.timeEnd()),
                daily.interval(),
              ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
              weatherCode: daily.variables(0)!.valuesArray()!,
              weather: this.getWeatherDescArray(
                daily.variables(0)!.valuesArray()!,
                range(
                  Number(daily.time()),
                  Number(daily.timeEnd()),
                  daily.interval(),
                ).map((t) =>
                  new Date((t + utcOffsetSeconds) * 1000).toLocaleDateString(
                    "en-GB",
                    {
                      weekday: "short",
                      day: "numeric",
                      month: "short",
                    },
                  ),
                ),
              ),
              temperature2m: daily.variables(1)!.valuesArray()!,
              sunrise: this.valuesInt64ArrayDate(
                daily.variables(2),
                utcOffsetSeconds,
              ),
              sunset: this.valuesInt64ArrayDate(
                daily.variables(3)!,
                utcOffsetSeconds,
              ),
              precipitationSum: daily.variables(4)!.valuesArray()!,
              precipitationProbabilityMax: daily.variables(5)!.valuesArray()!,
              windSpeed10mMax: daily.variables(6)!.valuesArray()!,
              windGusts10mMax: daily.variables(7)!.valuesArray()!,
              windDirection10mDominant: daily.variables(8)!.valuesArray()!,
            },
            settings: {
              url:
                "/api/resources/weather?latitude=" +
                params.latitude +
                "&longitude=" +
                params.longitude +
                "&days=" +
                params.forecast_days,
              latitude: params.latitude,
              longitude: params.longitude,
              days: params.forecast_days,
            },
          };
          const results = [];
          Object.keys(weatherData.daily.weather).forEach((k, index) => {
            weatherData.daily.weather[k].windSpeed10mMax =
              weatherData.daily.windSpeed10mMax[k].toFixed(2);
            weatherData.daily.weather[k].temperature2m =
              weatherData.daily.temperature2m[k].toFixed(2);
            weatherData.daily.weather[k].precipitationProbabilityMax =
              weatherData.daily.precipitationProbabilityMax[k].toFixed(2);
            weatherData.daily.weather[k].windDirection10mDominant =
              weatherData.daily.windDirection10mDominant[k].toFixed(2);
            weatherData.daily.weather[k].windDirection = this.getWindDirection(
              weatherData.daily.windDirection10mDominant[k],
            );
            weatherData.daily.weather[k].sunrise = new Date(
              weatherData.daily.sunrise[k],
            ).toLocaleTimeString();
            weatherData.daily.weather[k].windGusts10mMax =
              weatherData.daily.windGusts10mMax[k].toFixed(2);
            weatherData.daily.weather[k].windDirection10mDominant =
              weatherData.daily.windDirection10mDominant[k].toFixed(2);
            weatherData.daily.weather[k].sunset = new Date(
              weatherData.daily.sunset[k],
            ).toLocaleTimeString();
            results.push(weatherData.daily.weather[k]);
          });

          this.reverseGeoCodeLookup(lat, long)
            .then((geoData) => {
              const result = {
                weather: results,
                settings: weatherData.settings,
                location: geoData,
              };
              resolve(result);
            })
            .catch((err) => {
              this.logger.error("Error performing reverse Geo lookup", err);
              reject(err);
            });
        })
        .catch((err) => {
          this.logger.error("Error fetching weather", err);
          reject(err);
        });
    });
  }

  private getWindDirection(degree: number): string {
    const sectors = [
      "Northerly",
      "North Easterly",
      "Easterly",
      "South Easterly",
      "Southerly",
      "South Westerly",
      "Westerly",
      "North Westerly",
    ];

    degree += 22.5;

    if (degree < 0) degree = 360 - (Math.abs(degree) % 360);
    else degree = degree % 360;

    const which = parseInt((degree / 45).toString());
    return sectors[which];
  }

  private getWeatherDesc(value: any, isDay: any, day: any): any {
    const result = { date: day, code: value.toString(), text: "", icon: "" };
    const weather = WeatherCodes[value.toString()];
    if (weather) {
      result.text = isDay ? weather.day.description : weather.night.description;
      result.icon = value.toString() + (isDay ? "d" : "n") + "_big.png";
    }
    return result;
  }

  private getWeatherDescArray(values, days): any {
    const item = {};

    Object.keys(values).forEach((k, i) => {
      item[k] = this.getWeatherDesc(values[k], true, days[k]);
    });

    return item;
  }

  private valuesInt64Array(values) {
    const result = {};
    const count = values.valuesInt64Length();

    for (let i = 0; i < count; i++) {
      result[i.toString()] = Number(values.valuesInt64(i));
    }
    return result;
  }

  private valuesInt64ArrayDate(values, utcOffsetSeconds) {
    const result = {};
    const count = values.valuesInt64Length();

    for (let i = 0; i < count; i++) {
      result[i.toString()] = new Date(
        (Number(values.valuesInt64(i)) + utcOffsetSeconds) * 1000,
      );
    }
    return result;
  }

  public determineLocation(lat: number, long: number): Promise<any> {
    const client: HttpUtilities = new HttpUtilities();

    return new Promise((resolve, reject) => {
      if (lat && long) {
        if (lat != 0 && long != 0) {
          resolve({ latitude: lat, longitude: long });
          return;
        }
      }

      if (this.configService.get("externalservices.geoLocation")) {
        if (
          !isNaN(
            this.configService.get("externalservices.geoLocation.latitude"),
          ) &&
          !isNaN(
            this.configService.get("externalservices.geoLocation.longitude"),
          )
        ) {
          resolve({
            latitude: this.configService.get(
              "externalservices.geoLocation.latitude",
            ),
            longitude: this.configService.get(
              "externalservices.geoLocation.longitude",
            ),
          });
        }
      }

      const apiUrl = "https://get.geojs.io/v1/ip/geo.json";
      client
        .retrieve("GET", apiUrl)
        .then((jsonGeoLoc) => {
          const geoLoc = JSON.parse(jsonGeoLoc);
          resolve({
            latitude: parseFloat(geoLoc.latitude),
            longitude: parseFloat(geoLoc.longitude),
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public getGlobeImageUrl(
    h: any,
    lat: any,
    long: any,
    alt: any,
  ): Promise<string> {
    let url = "";
    let height = h ?? 0;
    let alti = alt ?? 35785;
    if (height == 0) {
      height = 800;
    }
    if (alti == 0) {
      alti = 35785;
    }
    return new Promise<string>((resolve, reject) => {
      this.determineLocation(lat, long)
        .then((loc) => {
          url =
            "https://www.fourmilab.ch/cgi-bin/Earth?img=learth.evif&imgsize=" +
            height +
            "&dynimg=y&gamma=1.32&opt=-l&lat=" +
            loc.latitude +
            "&lon=" +
            loc.longitude +
            "&alt=" +
            alti +
            "&tle=&date=0&utc=&jd=";
          resolve(url);
        })
        .catch((err) => {
          this.logger.error("Error in getGlobeImageUrl", err);
        });
    });
  }

  public getRSSFeed(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const parser = new Parser();
      parser
        .parseURL(url)
        .then((feed) => {
          resolve(feed);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  public getFeed(url: string): Promise<any> {
    const feedparser = new FeedParser({ normalize: true, addmeta: false });
    const client = new HttpUtilities();
    const result = { feedUrl: url, meta: {}, items: [] };
    const log = new Logger(ResourcesService.name);
    return new Promise<any>((resolve, reject) => {
      client
        .retrieve("GET", url)
        .then((response) => {
          feedparser.on("readable", function () {
            const stream = this;
            const meta = this.meta;
            let item;

            meta.pubDateStr = Intl.DateTimeFormat("en-GB", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(new Date(meta.pubDate));
            result.meta = meta;

            while ((item = stream.read())) {
              result.items.push(item);
            }
          });

          feedparser.on("end", function () {
            log.debug("Parsed feeditems", result.items.length);
            resolve(result);
          });

          feedparser.on("error", function (error) {
            log.error("Error in feedparser", error);
            reject(error);
          });

          feedparser.end(response);
        })
        .catch((err) => {
          this.logger.error("Error getting feed", err);
          reject(err);
        });
    });
  }

  public getNasaDailyImageUrl(): Promise<string> {
    const apiUrl = "https://apod.com/feed.rss";
    this.logger.debug("Getting NASA daily image", apiUrl);
    return new Promise<string>((resolve, reject) => {
      const parser = new Parser();
      parser
        .parseURL(apiUrl)
        .then((feed) => {
          const img = feed.items[0].enclosure.url;
          this.logger.debug("NASA Daily image url", img);
          resolve(img);
        })
        .catch((err) => {
          this.logger.error("Error getting NASA image", err);
          reject(err);
        });
    });
  }
}
