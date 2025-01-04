/**
 * Helper functions for making HTTP requests
 */
class HttpUtilities {
  /**
   * Performs a HTTP Request without posted data
   * @returns request results
   */
  public retrieve(method: string, url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: method,
          signal: AbortSignal.timeout(5000),
        })
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
          .then((result) => resolve(result))
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

  public retrieveBinary(method: string, url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: method,
          signal: AbortSignal.timeout(5000),
        })
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

  /**
   * Performs a HTTP Request without posted data
   * @returns request results as a generic
   */
  public retrieveGeneric<Type>(method: string, url: string): Promise<Type> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: method,
          signal: AbortSignal.timeout(5000),
        })
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

  /**
   * Performs a HTTP Request with posted data
   * @returns request results
   */
  public send(method: string, url: string, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: method,
          body: data,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          signal: AbortSignal.timeout(5000),
        })
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
          .then((result) => resolve(result))
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

  /**
   * Performs a HTTP Request with posted data as a generic
   * @returns request results as a generic
   */
  public sendGeneric<SendType, Type>(
    method: string,
    url: string,
    data: SendType,
  ): Promise<Type> {
    return new Promise((resolve, reject) => {
      try {
        fetch(url, {
          method: method,
          body: JSON.stringify(data),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          signal: AbortSignal.timeout(5000),
        })
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
}

export { HttpUtilities };
