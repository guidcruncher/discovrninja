import fs from "fs";
import path from "path";

export class HandlebarsFactory {
  private static _instance: any;

  public static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this.initialise();
    return this._instance;
  }

  public static initialise() {
    const clientBase =
      process.env.CLIENT_BASE ?? path.join(__dirname, "..", "..", "client");
    const getPartials = () => {
      const templatesPath = path.join(clientBase, "views");
      const partialsDir = path.join(templatesPath, "partials");
      const partials = {};
      fs.readdirSync(partialsDir, { withFileTypes: true })
        .filter((file) => {
          return path.extname(file.name) === ".hbs";
        })
        .forEach((file) => {
          const basename = path.basename(file.name, ".hbs");
          const filePath = path.join(partialsDir, file.name);
          partials[basename] = path.relative(templatesPath, filePath);
        });
      return partials;
    };

    const registerHelpers = (Handlebars) => {
      const clientBase =
        process.env.CLIENT_BASE ?? path.join(__dirname, "..", "client");
      const helpersDir = path.join(clientBase, "helpers");
      fs.readdirSync(helpersDir, { withFileTypes: true })
        .filter((file) => {
          return path.extname(file.name) === ".js";
        })
        .forEach((file) => {
          const filePath = path.join(helpersDir, file.name);
          const r = require(filePath);
          r(Handlebars);
        });
    };

    this._instance = require("handlebars");
    //   this._instance.partials = getPartials();

    const clientBaseDir =
      process.env.CLIENT_BASE ?? path.join(__dirname, "..", "..", "client");
    this._instance.templates = path.join(clientBaseDir, "views");
    this._instance.layout = "./templates/layout.hbs";
    registerHelpers(this._instance);
    return this._instance;
  }
}
