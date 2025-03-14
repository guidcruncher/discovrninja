namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    PORT?: number;
    HOST?: string;
    PWD: string;
    CADDYCONFIG: string;
    DNSHOSTS: string;
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
