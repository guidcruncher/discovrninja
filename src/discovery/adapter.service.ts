import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

import { CaddyService } from "./caddy.service";
import { DiscoveryModule } from "./discovery.module";
import { DnsmasqService } from "./dnsmasq.service";

export interface IConfigAdapter {
  writeHosts();
}

@Injectable()
export class AdapterService {
  private readonly logger = new Logger(AdapterService.name);

  constructor(private configService: ConfigService) {}

  public getWebAdapter(): Promise<IConfigAdapter> {
    return new Promise<IConfigAdapter>((resolve, reject) => {
      const adapter = this.configService
        .get("discovery.web.adapter")
        .toLowerCase();
      NestFactory.create(DiscoveryModule).then((mod) => {
        let result: IConfigAdapter = null;

        switch (adapter) {
          case "caddy":
            result = mod.get(CaddyService);
            break;
        }

        mod.close();

        if (result) {
          resolve(result);
        } else {
          reject();
        }
      });
    });
  }

  public getDnsAdapter(): Promise<IConfigAdapter> {
    return new Promise<IConfigAdapter>((resolve, reject) => {
      const adapter = this.configService
        .get("discovery.dns.adapter")
        .toLowerCase();
      NestFactory.create(DiscoveryModule).then((mod) => {
        let result: IConfigAdapter = null;

        switch (adapter) {
          case "dnsmasq":
            result = mod.get(DnsmasqService);
            break;
        }
        mod.close();
        if (result) {
          resolve(result);
        } else {
          reject();
        }
      });
    });
  }
}
