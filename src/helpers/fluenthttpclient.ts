class HttpClient {
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

  public static Get(url: string): HttpClient {
    return new HttpClient("GET", url);
  }

  public static Put(url: string): HttpClient {
    return new HttpClient("PUT", url);
  }

  public static Post(url: string): HttpClient {
    return new HttpClient("POST", url);
  }

  public Body<Type>(body: Type): HttpClient {
    this._body = body;
    return this;
  }

  public Header(kvobj: any): HttpClient {
    if (!this._headers) {
      this._headers = {};
    }

    const self = this;
    Object.keys(kvobj).forEach((k) => {
      this._headers[k] = kvobj[k];
    });
    return this;
  }

  private serializeBody(): string {
    const contentType = this._headers["Content-Type"] ?? "application/json";

    if (contentType.contains("json")) {
      return JSON.stringify(this._body);
    }

    if (contentType.contains("xml")) {
      const ser = new XMLSerializer();
      return ser.serializeToString(this._body);
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

  public Fetch<Type>(): Promise<Type> {
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

  public FetchBinary(): Promise<Uint8Array> {
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

export { HttpClient };
