import fs from "fs";
import path from "path";

export class Handlebars {
  public Engine: any;

  constructor() {
    this.Engine = require("handlebars");
  }

  public getPartials() {
    const instance = this;
    const clientBase = path.join(process.cwd(), "client");
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
    //instance.Engine.partials = partials;
    return partials;
  }

  public registerHelpers() {
    const instance = this;
    const clientBase = path.join(process.cwd(), "client");
    const helpersDir = path.join(clientBase, "helpers");
    fs.readdirSync(helpersDir, { withFileTypes: true })
      .filter((file) => {
        return path.extname(file.name) === ".js";
      })
      .forEach((file) => {
        const filePath = path.join(helpersDir, file.name);
        const r = require(filePath);
        r(instance.Engine);
      });
  }

  public reloadViewEngine(app) {
    // TODO
  }

  public setViewEngine(app) {
    const instance = this;
    const clientBase = path.join(process.cwd(), "client");
    this.registerHelpers();
    app.setViewEngine({
      engine: {
        handlebars: instance.Engine,
      },
      templates: path.join(clientBase, "views"),
      options: {
        layoutsDir: path.join(clientBase, "views", "layouts"),
        partials: instance.getPartials(),
      },
    });
  }
}

export class HandlebarsFactory {
  private static _instance: Handlebars;

  public static getInstance(): Handlebars {
    if (this._instance) {
      return this._instance;
    }

    this.initialise();
    return this._instance;
  }

  public static initialise() {
    this._instance = new Handlebars();
    this._instance.registerHelpers();
    this._instance.getPartials();
    return this._instance;
  }
}
