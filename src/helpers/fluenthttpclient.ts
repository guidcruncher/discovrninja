class DownloadResult {
  public contentType: string;

  public contentDisposition: string;

  public data: Uint8Array;
}

class FluentHttpClient {
  private _method: string;

  private _url: string;

  private _headers = null;

  private _timeout: number;

  private _hasbody: boolean;

  private _parameters: any;

  private _body: any;

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
    return this.Header({"Authorization": scheme + " " + credentials});
  }

  public ContentType(type: string): FluentHttpClient {
    return this.Header({"Content-Type": type.toLowerCase()});
  }

  public Accepts(type: string): FluentHttpClient {
    return this.Header({"Accepts": type.toLowerCase()});
  }

  private serializeBody(): string {
    const contentType = this._headers["Content-Type"];

    if (contentType.contains("json")) {
      return JSON.stringify(this._body);
    }

    if (contentType.contains("xml")) {
      const ser = new XMLSerializer();
      return ser.serializeToString(this._body);
    }

    if (contentType.contains("forms")) {
      const items = [];
      Object.keys(this._body).forEach((k) => {
        items.push(k + "=" + encodeURIComponent(this._body[k]));
      });
      return items.join("&");
    }
    return JSON.stringify(this._body);
  }

  private createUrl(): string {
    var url = this._url;
    Object.keys(this._parameters).forEach((k)=>{
        var re = new RegExp("\\s{" + k + "}\\s", "g");
        url = url.replace(re, this._parameters[k]);
        re = new RegExp("\\s:" +k + "\\s", "g");
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

  public Result<Type>(): Promise<Type> {
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
              return response.json();
            }
          })
          .then((result) => resolve(result as Type))
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
        var result: DownloadResult = new DownloadResult();
        this.createFetch()
          .then((response) => {
            if (!response.ok) {
              reject({
                statusText: response.statusText,
                status: response.status,
                error: null,
              });
            } else {
              result.contentDisposition = response.headers.get("Content-Disposition");
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
}

export { FluentHttpClient };
