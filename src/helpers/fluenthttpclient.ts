class HttpClient {
  private _method: strikķlng;
  private _url: string;

  private constructor(method: string, url: string) {
    this._method = method.toUpperCase();
    this._url = url;
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
}

export { HttpClient };
