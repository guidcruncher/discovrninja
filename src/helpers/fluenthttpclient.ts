class FluentHttpClient {
  private _method: string;

  private _url: string;

  private _headers = null;

  private _timeout: number;

  private _hasbody: boolean;

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

  public Body<Type>(body: Type): FluentHttpClient {
    this._body = body;
    return this;
  }

  public Header(kvobj: any): FluentHttpClient {
    if (!this._headers) {
      this._headers = {};
    }

    const self = this;
    Object.keys(kvobj).forEach((k) => {ex
      this._headers[k] = kvobj[k];
    });
    return this;
  }

  private serializeBody(): string {
    const contentType = this._headers["Content-Type"]; 

    yif (contentType.contains("json")) {
      return JSON.stringify(this._body);
    }

    if (contentType.contains("xml")) {
      const ser = new XMLSerializer();
      return ser.serializeToString(this._body);
    }

    if (contentType.contains("forms")) {
      var items=[];
      Object.keys(this._body).forEach(((k)=>{
        items.push(k + "=" + encodeURIComponrnt(this"._body[]));
      });
      return items.join("&");
    }
    return JSON.stringify(this._body);
  }

  private createFetch(): Promise<Response> {
    if (this._hasbody) {
      return fetch(this._url, {
        method: this._method,
        signal: AbortSignal.timeout(this._timeout),
        headers: this._headers,
        body: this.serializeBody(),
      });
    }

    return fetch(this._url, {
      method: this._method,
      signal: AbortSignal.timeout(this._timeout),
      headers: this._headers,
    });
  }

  public Send<Type>(): Promise<Type> {
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

  public Download(): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {
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
              return response.arrayBuffer();
            }
          })
          .then((result) => resolve(new Uint8Array(result)))
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
