import { ContainerStats } from "@data/schemas/containerstats.schema";
import { Controller, Get, Param, Query, Res } from "@nestjs/common";

import { DockerService } from "./docker.service";
import { DockerRepositoryService } from "./docker-repository.service";
import { DockerSystemService } from "./docker-system.service";

/**
 * The Docker service API
 */
@Controller("api/docker")
export class DockerController {
  constructor(
    private readonly dockerService: DockerService,
    private readonly dockerSystemService: DockerSystemService,
    private readonly dockerRepositoryService: DockerRepositoryService,
  ) {}

  /**
   * Retrieves the project tree and returns the results.
   * @returns Project tree
   */
  @Get("projects")
  async getprojects(): Promise<any> {
    const result = await this.dockerService.getProjectTree();
    delete result._s;
    return result;
  }

  @Get("prune")
  prune() {
    return this.dockerSystemService.prune();
  }

  @Get("delete/:container")
  deleteStack(@Param("container") container) {
    return this.dockerService.deleteStack(container);
  }

  @Get("container/:id/createoptions")
  async getcontainerjson(@Param("id") id, @Res() res) {
    this.dockerService
      .getContainerCreateJson(id)
      .then((cfg) => {
        res
          .status(200)
          .header(
            "Content-Disposition",
            "attachment; filename=" + id + ".json.container",
          )
          .header("Content-Type", "text/plain")
          .send(JSON.stringify(cfg, null, 4));
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }

  @Get("container/:id/available")
  getContainerAvailable(@Param("id") id, @Res() res) {
    this.dockerService
      .getContainerAvailable(id)
      .then((state) => {
        res.status(state ? 200 : 503).send({ name: id, available: state });
      })
      .catch((err) => {
        res.status(503).send(err);
      });
  }

  @Get("dashboard/:id")
  async getContainerdDashboard(
    @Param("id") id,
    @Query("limit") limit,
  ): Promise<ContainerStats[]> {
    let maxcount = 24;
    if (limit) {
      maxcount = parseInt(limit);
    }

    return this.dockerService.getContainerDashboard(id, maxcount);
  }

  /**
   * Retrieves the Container detail and returns the results.
   * @returns container detail
   */
  @Get("container/:id")
  async getcontainer(@Param("id") id): Promise<any> {
    return await new Promise((resolve, reject) => {
      this.dockerService
        .getContainerProp(id)
        .then((container) => {
          resolve(container);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * Retrieves the Available Container listing and returns the results.
   * @returns list of availble containers
   */
  @Get("containers")
  async getcontainers(): Promise<any> {
    return await this.dockerService.getContainers();
  }

  /**
   * Retrieves the Available Container stats and returns the results.
   * @returns list of availble containers
   */
  @Get("ps")
  async containerstat(): Promise<any> {
    return await this.dockerService.getAllContainerStats();
  }

  @Get("container/stop/:id")
  async containerstop(@Param("id") id: string): Promise<any> {
    return await this.dockerService.stop(id);
  }

  @Get("container/logs/:id")
  containerlogs(@Param("id") id: string, @Res() res) {
    this.dockerService
      .logs(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  @Get("container/start/:id")
  async containerstart(@Param("id") id: string): Promise<any> {
    return await this.dockerService.start(id);
  }

  @Get("container/restart/:id")
  async containerrestart(@Param("id") id: string): Promise<any> {
    return await this.dockerService.restart(id);
  }

  @Get("repository/summary")
  async repositorysummary(@Query("image") image: string): Promise<any> {
    return await this.dockerRepositoryService.repositorySummary(image);
  }

  @Get("repository/query")
  async repositoryquery(@Query("image") image: string): Promise<any> {
    return await this.dockerRepositoryService.queryRepository(image);
  }

  @Get("repository/tags")
  async repositoryquerytags(
    @Query("image") image: string,
    @Query("os") os: string,
    @Query("arch") arch: string,
  ): Promise<any> {
    return await this.dockerRepositoryService.queryRepositoryTags(
      image,
      os,
      arch,
    );
  }

  @Get("image/updatecheck")
  async checkForUpdate(@Query("image") image: string): Promise<any> {
    return await this.dockerService.checkForUpdateImage(image);
  }
}
