import { Logger } from "@nestjs/common";
import * as fs from "fs";

class DownloadResult {
  public contentType: string;

  public contentDisposition: string;

  public url: URL;

  public data: Uint8Array;
}

class HttpClientResult {
  public contentType: string;

  public contentDisposition: string;

  public url: URL;

  public value: string;

  constructor() {
    this.contentType = "";
    this.contentDisposition = "";
    this.value = "";
  }
}

class FluentHttpClient {
  private _method = "";

  private _url = "";

  private _headers: any = {};

  private _timeout = 1000;

  private _hasbody: boolean;

  private _parameters: any = {};

  private _body: any = {};

  private readonly logger = new Logger(FluentHttpClient.name);

  private constructor(method: string, url: string) {
    this._method = method.toUpperCase();
    this._url = url;
    this._timeout = 5000;
    this._hasbody = ["PUT", "POST"].includes(this._method);
    this._headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  public static Get(url: string): FluentHttpClient {
    return new FluentHttpClient("GET", url);
  }

  public static Put(url: string): FluentHttpClient {
    return new FluentHttpClient("PUT", url);
  }

  public static Post(url: string): FluentHttpClient {
    return new FluentHttpClient("POST", url);
  }

  public Parameters(parameters: any): FluentHttpClient {
    this._parameters = parameters;
    return this;
  }

  public AddParameters(name: string, value: any): FluentHttpClient {
    this._parameters[name] = value;
    return this;
  }

  public Body<Type>(body: Type, contentType: string): FluentHttpClient {
    this._body = body;

    if (contentType) {
      this.ContentType(contentType);
    } else {
      this.ContentType("application/json");
    }

    return this;
  }

  public Header(kvobj: any): FluentHttpClient {
    if (!this._headers) {
      this._headers = {};
    }

    const self = this;
    Object.keys(kvobj).forEach((k) => {
      this._headers[k] = kvobj[k];
    });
    return this;
  }

  public Authorization(scheme: string, credentials: string): FluentHttpClient {
    return this.Header({ Authorization: scheme + " " + credentials });
  }

  public ContentType(type: string): FluentHttpClient {
    return this.Header({ "Content-Type": type.toLowerCase() });
  }

  public Accepts(type: string): FluentHttpClient {
    return this.Header({ Accepts: type.toLowerCase() });
  }

  private deSerializeBody<Type>(contentType: string, body: string): Type {
    if (contentType.toLowerCase().includes("json")) {
      return JSON.parse(body) as Type;
    }

    if (contentType.toLowerCase().includes("xml")) {
      const ser = new DOMParser();
      return ser.parseFromString(
        body,
        contentType.toLowerCase() as DOMParserSupportedType,
      ) as Type;
    }

    return body as Type;
  }

  private serializeBody(): string {
    const contentType = this._headers["Content-Type"];

    if (contentType.includes("json")) {
      return JSON.stringify(this._body);
    }

    if (contentType.includes("xml")) {
      const ser = new XMLSerializer();
      return ser.serializeToString(this._body);
    }

    if (contentType.includes("forms")) {
      const items = [];
      Object.keys(this._body).forEach((k) => {
        items.push(k + "=" + encodeURIComponent(this._body[k]));
      });
      return items.join("&");
    }
    return JSON.stringify(this._body);
  }

  private createUrl(): string {
    let url = this._url;
    Object.keys(this._parameters).forEach((k) => {
      let re = new RegExp("\\s{" + k + "}\\s", "g");
      url = url.replace(re, this._parameters[k]);
      re = new RegExp("\\s:" + k + "\\s", "g");
      url = url.replace(re, this._parameters[k]);
    });
    return url;
  }

  private createFetch(): Promise<Response> {
    if (this._hasbody) {
      return fetch(this.createUrl(), {
        method: this._method,
        signal: AbortSignal.timeout(this._timeout),
        headers: this._headers,
        body: this.serializeBody(),
      });
    }

    return fetch(this.createUrl(), {
      method: this._method,
      signal: AbortSignal.timeout(this._timeout),
      headers: this._headers,
    });
  }

  public Execute(): Promise<HttpClientResult> {
    return new Promise<HttpClientResult>((resolve, reject) => {
      try {
        const result = new HttpClientResult();
        this.createFetch()
          .then((response) => {
            if (!response.ok) {
              reject({
                statusText: response.statusText,
                status: response.status,
                error: null,
              });
            } else {
              result.url = new URL(response.url);
              result.contentDisposition = response.headers.get(
                "Content-Disposition",
              );
              result.contentType = response.headers.get("Content-Type");
              return response.text();
            }
          })
          .then((data) => {
            result.value = data;
            resolve(result);
          })
          .catch((error) => {
            if (error instanceof Error) {
              reject({ statusText: error.message, status: 500, error: error });
            } else {
              reject({
                statusText: "Unexpected error",
                status: 500,
                error: null,
              });
            }
          });
      } catch (error) {
        if (error instanceof Error) {
          reject({ statusText: error.message, status: 500, error: error });
        } else {
          reject({ statusText: "Unexpected error", status: 500, error: null });
        }
      }
    });
  }

  public Response<Type>(): Promise<Type> {
    return new Promise<Type>((resolve, reject) => {
      try {
        this.createFetch()
          .then((response) => {
            if (!response.ok) {
              reject({
                statusText: response.statusText,
                status: response.status,
                error: null,
              });
            } else {
              return response.text();
            }
          })
          .then((data) => {
            resolve(JSON.parse(data) as Type);
          })
          .catch((error) => {
            if (error instanceof Error) {
              reject({ statusText: error.message, status: 500, error: error });
            } else {
              reject({
                statusText: "Unexpected error",
                status: 500,
                error: null,
              });
            }
          });
      } catch (error) {
        if (error instanceof Error) {
          reject({ statusText: error.message, status: 500, error: error });
        } else {
          reject({ statusText: "Unexpected error", status: 500, error: null });
        }
      }
    });
  }

  public Download(): Promise<DownloadResult> {
    return new Promise<DownloadResult>((resolve, reject) => {
      try {
        const result: DownloadResult = new DownloadResult();
        this.createFetch()
          .then((response) => {
            if (!response.ok) {
              reject({
                statusText: response.statusText,
                status: response.status,
                error: null,
              });
            } else {
              result.url = new URL(response.url);
              result.contentDisposition = response.headers.get(
                "Content-Disposition",
              );
              result.contentType = response.headers.get("Content-Type");
              return response.arrayBuffer();
            }
          })
          .then((buffer) => {
            result.data = new Uint8Array(buffer);
            resolve(result);
          })
          .catch((error) => {
            if (error instanceof Error) {
              reject({ statusText: error.message, status: 500, error: error });
            } else {
              reject({
                statusText: "Unexpected error",
                status: 500,
                error: null,
              });
            }
          });
      } catch (error) {
        if (error instanceof Error) {
          reject({ statusText: error.message, status: 500, error: error });
        } else {
          reject({ statusText: "Unexpected error", status: 500, error: null });
        }
      }
    });
  }

  public DownloadTo(filename: string): Promise<DownloadResult> {
    return new Promise<DownloadResult>((resolve, reject) => {
      try {
        const result: DownloadResult = new DownloadResult();
        this.createFetch()
          .then((response) => {
            if (!response.ok) {
              reject({
                statusText: response.statusText,
                status: response.status,
                error: null,
              });
            } else {
              result.url = new URL(response.url);
              result.contentDisposition = response.headers.get(
                "Content-Disposition",
              );
              result.contentType = response.headers.get("Content-Type");
              return response.arrayBuffer();
            }
          })
          .then((buffer) => {
            result.data = new Uint8Array(buffer);
            fs.createWriteStream(filename).write(result.data);
            resolve(result);
          })
          .catch((error) => {
            if (error instanceof Error) {
              reject({ statusText: error.message, status: 500, error: error });
            } else {
              reject({
                statusText: "Unexpected error",
                status: 500,
                error: null,
              });
            }
          });
      } catch (error) {
        if (error instanceof Error) {
          reject({ statusText: error.message, status: 500, error: error });
        } else {
          reject({ statusText: "Unexpected error", status: 500, error: null });
        }
      }
    });
  }
}

export { DownloadResult, FluentHttpClient, HttpClientResult };
