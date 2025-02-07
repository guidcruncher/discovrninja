import { ServiceDefinitionList } from "@customtypes/servicedefinition";
import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
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

  @Get("/all")
  async getAll(): Promise<any> {
    return await this.discoveryService.getAll(false);
  }

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
}
