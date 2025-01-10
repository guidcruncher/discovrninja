import { PortainerTemplate, Templates } from ".//portainer-template.types";

export class PortainerHelper {
  public static identify(templates: string): string {
    const obj = JSON.parse(templates);

    if (Object.prototype.toString.call(obj) === "[object Array]") {
      return "1";
    }

    return obj.version;
  }

  public static Parse(templates: string): PortainerTemplate {
    const version: string = this.identify(templates);
    let template: PortainerTemplate = { version: version, templates: [] };
    const obj = JSON.parse(templates);

    if (version == "1") {
      template.templates = obj as Templates;
      template.version = "1";
      return template;
    }

    template = obj as PortainerTemplate;
    return template;
  }
}
