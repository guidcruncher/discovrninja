"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesService = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var weathercodes_1 = require("@customtypes/weathercodes");
var fluenthttpclient_1 = require("@helpers/fluenthttpclient");
var httputilities_1 = require("@helpers/httputilities");
var common_1 = require("@nestjs/common");
var feedparser_1 = require("feedparser");
var openmeteo_1 = require("openmeteo");
var rss_parser_1 = require("rss-parser");
var ResourcesService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ResourcesService = _classThis = /** @class */ (function () {
        function ResourcesService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(ResourcesService.name);
        }
        ResourcesService_1.prototype.proxy = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.logger.debug("Proxying " + url);
                var client = fluenthttpclient_1.FluentHttpClient.Get(url)
                    .Download()
                    .then(function (downloadResult) {
                    resolve(downloadResult);
                })
                    .catch(function (err) {
                    _this.logger.error("Error Proxying " + url, err);
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.reverseGeoCodeLookup = function (lat, long) {
            var apiUrl = "https://nominatim.openstreetmap.org/reverse?lat=" +
                lat +
                "&lon=" +
                long +
                "&format=json";
            var client = new httputilities_1.HttpUtilities();
            return new Promise(function (resolve, reject) {
                client
                    .retrieve("GET", apiUrl)
                    .then(function (response) {
                    var geodata = JSON.parse(response);
                    resolve(geodata);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.wikipediaSearch = function (lang, query, limit) {
            return new Promise(function (resolve, reject) {
                var apiUrl = "https://" +
                    lang.toLowerCase() +
                    "wikipedia.org/w/api.php?action=opensearch&search=" +
                    encodeURIComponent(query) +
                    "&format=json&limit=" +
                    limit.toString();
                var client = new httputilities_1.HttpUtilities();
                client
                    .retrieve("GET", apiUrl)
                    .then(function (jsonData) {
                    var parsed = JSON.parse(jsonData);
                    var result = { searchTerm: parsed[0], results: [] };
                    parsed[1].forEach(function (url, i) {
                        var entry = {
                            url: url,
                            description: parsed[2][i],
                            title: parsed[3][i],
                        };
                        result.results.push(entry);
                    });
                    resolve(result);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.fetchWikipediaPage = function (lang, page) {
            var apiUrl = "https://" +
                lang.toLowerCase() +
                ".wikipedia.org/w/api.php?action=parse&section=0&prop=text&page=" +
                encodeURIComponent(page) +
                "&format=json";
            var client = new httputilities_1.HttpUtilities();
            return new Promise(function (resolve, reject) {
                client
                    .retrieve("GET", apiUrl)
                    .then(function (jsonData) {
                    try {
                        if (jsonData) {
                            var parsed = JSON.parse(jsonData);
                            resolve(parsed);
                        }
                        else {
                            reject();
                        }
                    }
                    catch (err) {
                        reject(err);
                    }
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.fetchWeather = function (lat, long, days) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (isNaN(lat) || isNaN(long)) {
                    _this.determineLocation(lat, long)
                        .then(function (loc) {
                        _this._fetchWeather(loc.latitude, loc.longitude, days)
                            .then(function (weather) {
                            resolve(weather);
                        })
                            .catch(function (err) {
                            _this.logger.error("Error fetching weather", err);
                            reject();
                        });
                    })
                        .catch(function (err) {
                        _this.logger.error("Error fetching weather location", err);
                        reject();
                    });
                }
                else {
                    return _this._fetchWeather(lat, long, days)
                        .then(function (weather) {
                        resolve(weather);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error fetching weather", err);
                        reject(err);
                    });
                }
            });
        };
        ResourcesService_1.prototype._fetchWeather = function (lat, long, days) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var params = {
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
                var url = "https://api.open-meteo.com/v1/forecast";
                (0, openmeteo_1.fetchWeatherApi)(url, params)
                    .then(function (responses) {
                    // Helper function to form time ranges
                    var range = function (start, stop, step) {
                        return Array.from({ length: (stop - start) / step }, function (_, i) { return start + i * step; });
                    };
                    // Process first location. Add a for-loop for multiple locations or weather models
                    var response = responses[0];
                    // Attributes for timezone and location
                    var utcOffsetSeconds = response.utcOffsetSeconds();
                    var timezone = response.timezone();
                    var timezoneAbbreviation = response.timezoneAbbreviation();
                    var latitude = response.latitude();
                    var longitude = response.longitude();
                    var current = response.current();
                    var hourly = response.hourly();
                    var daily = response.daily();
                    // Note: The order of weather variables in the URL query and the indices below need to match!
                    var weatherData = {
                        current: {
                            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                            temperature2m: current.variables(0).value(),
                            isDay: current.variables(1).value(),
                            precipitation: current.variables(2).value(),
                            weatherCode: current.variables(3).value(),
                            weather: _this.getWeatherDesc(current.variables(3).value(), current.variables(1).value(), new Date((Number(current.time()) + utcOffsetSeconds) * 1000).toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                            })),
                            surfacePressured: current.variables(4).value(),
                            windSpeed10m: current.variables(5).value(),
                            windDirection10m: current.variables(6).value(),
                        },
                        daily: {
                            time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(function (t) { return new Date((t + utcOffsetSeconds) * 1000); }),
                            weatherCode: daily.variables(0).valuesArray(),
                            weather: _this.getWeatherDescArray(daily.variables(0).valuesArray(), range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(function (t) {
                                return new Date((t + utcOffsetSeconds) * 1000).toLocaleDateString("en-GB", {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "short",
                                });
                            })),
                            temperature2m: daily.variables(1).valuesArray(),
                            sunrise: _this.valuesInt64ArrayDate(daily.variables(2), utcOffsetSeconds),
                            sunset: _this.valuesInt64ArrayDate(daily.variables(3), utcOffsetSeconds),
                            precipitationSum: daily.variables(4).valuesArray(),
                            precipitationProbabilityMax: daily.variables(5).valuesArray(),
                            windSpeed10mMax: daily.variables(6).valuesArray(),
                            windGusts10mMax: daily.variables(7).valuesArray(),
                            windDirection10mDominant: daily.variables(8).valuesArray(),
                        },
                        settings: {
                            url: "/api/resources/weather?latitude=" +
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
                    var results = [];
                    Object.keys(weatherData.daily.weather).forEach(function (k, index) {
                        weatherData.daily.weather[k].windSpeed10mMax =
                            weatherData.daily.windSpeed10mMax[k].toFixed(2);
                        weatherData.daily.weather[k].temperature2m =
                            weatherData.daily.temperature2m[k].toFixed(2);
                        weatherData.daily.weather[k].precipitationProbabilityMax =
                            weatherData.daily.precipitationProbabilityMax[k].toFixed(2);
                        weatherData.daily.weather[k].windDirection10mDominant =
                            weatherData.daily.windDirection10mDominant[k].toFixed(2);
                        weatherData.daily.weather[k].windDirection = _this.getWindDirection(weatherData.daily.windDirection10mDominant[k]);
                        weatherData.daily.weather[k].sunrise = new Date(weatherData.daily.sunrise[k]).toLocaleTimeString();
                        weatherData.daily.weather[k].windGusts10mMax =
                            weatherData.daily.windGusts10mMax[k].toFixed(2);
                        weatherData.daily.weather[k].windDirection10mDominant =
                            weatherData.daily.windDirection10mDominant[k].toFixed(2);
                        weatherData.daily.weather[k].sunset = new Date(weatherData.daily.sunset[k]).toLocaleTimeString();
                        results.push(weatherData.daily.weather[k]);
                    });
                    _this.reverseGeoCodeLookup(lat, long)
                        .then(function (geoData) {
                        var result = {
                            weather: results,
                            settings: weatherData.settings,
                            location: geoData,
                        };
                        resolve(result);
                    })
                        .catch(function (err) {
                        _this.logger.error("Error performing reverse Geo lookup", err);
                        reject(err);
                    });
                })
                    .catch(function (err) {
                    _this.logger.error("Error fetching weather", err);
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.getWindDirection = function (degree) {
            var sectors = [
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
            if (degree < 0)
                degree = 360 - (Math.abs(degree) % 360);
            else
                degree = degree % 360;
            var which = parseInt((degree / 45).toString());
            return sectors[which];
        };
        ResourcesService_1.prototype.getWeatherDesc = function (value, isDay, day) {
            var result = { date: day, code: value.toString(), text: "", icon: "" };
            var weather = weathercodes_1.WeatherCodes[value.toString()];
            if (weather) {
                result.text = isDay ? weather.day.description : weather.night.description;
                result.icon = value.toString() + (isDay ? "d" : "n") + "_big.png";
            }
            return result;
        };
        ResourcesService_1.prototype.getWeatherDescArray = function (values, days) {
            var _this = this;
            var item = {};
            Object.keys(values).forEach(function (k, i) {
                item[k] = _this.getWeatherDesc(values[k], true, days[k]);
            });
            return item;
        };
        ResourcesService_1.prototype.valuesInt64Array = function (values) {
            var result = {};
            var count = values.valuesInt64Length();
            for (var i = 0; i < count; i++) {
                result[i.toString()] = Number(values.valuesInt64(i));
            }
            return result;
        };
        ResourcesService_1.prototype.valuesInt64ArrayDate = function (values, utcOffsetSeconds) {
            var result = {};
            var count = values.valuesInt64Length();
            for (var i = 0; i < count; i++) {
                result[i.toString()] = new Date((Number(values.valuesInt64(i)) + utcOffsetSeconds) * 1000);
            }
            return result;
        };
        ResourcesService_1.prototype.determineLocation = function (lat, long) {
            var _this = this;
            var client = new httputilities_1.HttpUtilities();
            return new Promise(function (resolve, reject) {
                if (lat && long) {
                    if (lat != 0 && long != 0) {
                        resolve({ latitude: lat, longitude: long });
                        return;
                    }
                }
                if (_this.configService.get("externalservices.geoLocation")) {
                    if (!isNaN(_this.configService.get("externalservices.geoLocation.latitude")) &&
                        !isNaN(_this.configService.get("externalservices.geoLocation.longitude"))) {
                        resolve({
                            latitude: _this.configService.get("externalservices.geoLocation.latitude"),
                            longitude: _this.configService.get("externalservices.geoLocation.longitude"),
                        });
                    }
                }
                var apiUrl = "https://get.geojs.io/v1/ip/geo.json";
                client
                    .retrieve("GET", apiUrl)
                    .then(function (jsonGeoLoc) {
                    var geoLoc = JSON.parse(jsonGeoLoc);
                    resolve({
                        latitude: parseFloat(geoLoc.latitude),
                        longitude: parseFloat(geoLoc.longitude),
                    });
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.getGlobeImageUrl = function (h, lat, long, alt) {
            var _this = this;
            var url = "";
            var height = h !== null && h !== void 0 ? h : 0;
            var alti = alt !== null && alt !== void 0 ? alt : 35785;
            if (height == 0) {
                height = 800;
            }
            if (alti == 0) {
                alti = 35785;
            }
            return new Promise(function (resolve, reject) {
                _this.determineLocation(lat, long)
                    .then(function (loc) {
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
                    .catch(function (err) {
                    _this.logger.error("Error in getGlobeImageUrl", err);
                });
            });
        };
        ResourcesService_1.prototype.getRSSFeed = function (url) {
            return new Promise(function (resolve, reject) {
                var parser = new rss_parser_1.default();
                parser
                    .parseURL(url)
                    .then(function (feed) {
                    resolve(feed);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.getFeed = function (url) {
            var _this = this;
            var feedparser = new feedparser_1.default({ normalize: true, addmeta: false });
            var client = new httputilities_1.HttpUtilities();
            var result = { feedUrl: url, meta: {}, items: [] };
            var log = new common_1.Logger(ResourcesService.name);
            return new Promise(function (resolve, reject) {
                client
                    .retrieve("GET", url)
                    .then(function (response) {
                    feedparser.on("readable", function () {
                        var stream = this;
                        var meta = this.meta;
                        var item;
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
                    .catch(function (err) {
                    _this.logger.error("Error getting feed", err);
                    reject(err);
                });
            });
        };
        ResourcesService_1.prototype.getNasaDailyImageUrl = function () {
            var _this = this;
            var apiUrl = "https://apod.com/feed.rss";
            this.logger.debug("Getting NASA daily image", apiUrl);
            return new Promise(function (resolve, reject) {
                var parser = new rss_parser_1.default();
                parser
                    .parseURL(apiUrl)
                    .then(function (feed) {
                    var img = feed.items[0].enclosure.url;
                    _this.logger.debug("NASA Daily image url", img);
                    resolve(img);
                })
                    .catch(function (err) {
                    _this.logger.error("Error getting NASA image", err);
                    reject(err);
                });
            });
        };
        return ResourcesService_1;
    }());
    __setFunctionName(_classThis, "ResourcesService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ResourcesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ResourcesService = _classThis;
}();
exports.ResourcesService = ResourcesService;
