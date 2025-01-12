import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { HttpUtilities } from "@helpers/httputilities";
import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { DiscoveryService } from "./discovery.service";

/**
 * The Discovery service API
 */
@Controller("api/discovery")
export class DiscoveryController {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly configService: ConfigService,
  ) {
    this.discoveryService = discoveryService;
  }

  /**

   * Performs a service scan and returns the results.
   * @returns (DiscoveryScan) results of scan
   */
  @Get("/scan")
  async scan(): Promise<ServiceDefinitionList> {
    return await this.discoveryService.scan();
  }

  @Get("changeicon/:id")
  async changeIcon(
    @Param("id") id,
    @Query("catalog") catalog,
    @Query("slug") slug,
  ): Promise<any> {
    return this.discoveryService.changeIcon(id, catalog, slug);
  }

  @Get("definition/:id")
  async getDefinition(@Param("id") id): Promise<any> {
    return this.discoveryService.getDefinition(id);
  }

  @Get("definition/archive/:id/:archived")
  async archiveDefinition(
    @Param("id") id,
    @Param("archived") archived: boolean,
  ): Promise<any> {
    return this.discoveryService.archiveDefinition(id, archived);
  }

  @Post("definition/:id")
  async saveDefinition(@Param("id") id, @Body() data): Promise<any> {
    return this.discoveryService.saveDefinition(id, data);
  }

  @Post("project/definition/:id")
  async saveProjectDefinition(@Param("id") id, @Body() data): Promise<any> {
    return this.discoveryService.saveProjectDefinition(id, data);
  }

  @Get("find/:id")
  async findDefinition(@Param("id") id): Promise<any> {
    return await this.discoveryService.find(id);
  }

  @Get("/updatedns")
  scanAndSend(@Res() res) {
    return new Promise((resolve, reject) => {
      return this.discoveryService
        .scan()
        .then((result) => {
          const httputilities = new HttpUtilities();
          const url =
            this.configService.get("host.dnsServer.endpoint") +
            "/api/dns/loaddatabase";
          httputilities
            .send("POST", url, JSON.stringify(result))
            .then((response) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          reject(err);
        });
    })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        if (err.status) {
          res.status(err.status).send(err.statusText);
        } else {
          res.status(500).send(err);
        }
      });
  }
}
