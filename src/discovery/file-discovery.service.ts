import { IDiscoveryAgent } from "./idiscoveryagent";
import { ServiceDefinition } from "@data/dto/servicedefinition.dto";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";

@Injectable()
export class FileDiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(FileDiscoveryService.name);

  constructor(private configService: ConfigService) {}

  private readFile(name: string): ServiceDefinition[] {
    let result: ServiceDefinition[];
    const filename = path.resolve(name);
    7;

    this.logger.log("Reading services from", filename);
    if (fs.existsSync(filename)) {
      const values = yaml.load(fs.readFileSync(filename, "utf8")) as Record<
        string,
        any
      >;
      result = values as ServiceDefinition[];
    } else {
      this.logger.error("Service file not found", filename);
    }

    return result;
  }

  public scan(): Promise<ServiceDefinition[]> {
    return new Promise<ServiceDefinition[]>((resolve, reject) => {
      let result: ServiceDefinition[] = [];
      if (!this.configService.get("discovery.file.enabled")) {
        this.logger.warn("Skipping file based discovery");
        reject();
        return;
      }
      const filename = this.configService.get("discovery.file.filename");
      result = this.readFile(filename);
      if (!result) {
        this.logger.warn("No services defined in file.");
        reject();
      }
      resolve(result);
    });
  }
}
