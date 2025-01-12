import { IDiscoveryAgent } from "@customtypes/idiscoveryagent";
import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as fs from "fs";
import * as yaml from "js-yaml";
import * as path from "path";

@Injectable()
export class FileDiscoveryService implements IDiscoveryAgent {
  private readonly logger = new Logger(FileDiscoveryService.name);

  constructor(private configService: ConfigService) {}

  private readFile(name: string): ServiceDefinitionList {
    let result: ServiceDefinitionList;
    const filename = path.resolve(name);

    this.logger.log("Reading services from", filename);
    if (fs.existsSync(filename)) {
      const values = yaml.load(fs.readFileSync(filename, "utf8")) as Record<
        string,
        any
      >;
      result = values as ServiceDefinitionList;
    } else {
      this.logger.error("Service file not found", filename);
    }

    return result;
  }

  public scan(): Promise<ServiceDefinitionList> {
    return new Promise<ServiceDefinitionList>((resolve, reject) => {
      let result: ServiceDefinitionList = new ServiceDefinitionList();
      if (!this.configService.get("discovery.file.enabled")) {
        this.logger.warn("Skipping file based discovery");
        reject();
        return;
      }
      const filename = this.configService.get("discovery.file.filename");
      result = this.readFile(filename);
      if (!result.services) {
        this.logger.warn("No services defined in file.");
        reject();
      }
      resolve(result);
    });
  }
}

















































