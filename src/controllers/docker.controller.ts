import { Body, Controller, Get, Param, Post, Query, Res } from "@nestjs/common";
import { ContainerStats } from "@schemas/containerstats.schema";
import { ComposeService } from "@services/compose.service";
import { DockerRepositoryService } from "@services/docker.repository.service";
import { DockerService } from "@services/docker.service";
import { ContainerCreateOptions } from "dockerode";

/**
 * The Docker service API
 */
@Controller("api/docker")
export class DockerController {
  constructor(
    private readonly dockerService: DockerService,
    private readonly composeService: ComposeService,
    private readonly dockerRepositoryService: DockerRepositoryService,
  ) {}

  /**
   * Retrieves the project tree and returns the results.
   * @returns Project tree
   */
  @Get("projects")
  async getprojects(): Promise<any> {
    return await this.dockerService.getProjectTree();
  }

  @Post("composerize")
  composerize(@Body() run: any, @Res() res) {
    const result = this.composeService.composerize(run.run);
    res.status(200).type("text/plain").send(result);
  }

  @Get("container/:id/createoptions")
  async getcontainerjson(@Param("id") id): Promise<ContainerCreateOptions> {
    return this.dockerService.getContainerCreateJson(id);
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
        .getContainer(id)
        .then((container) => {
          this.dockerService
            .checkForUpdateImage(container.Config.Image)
            .then((updateStatus) => {
              container.UpdateStatus = updateStatus;
              resolve(container);
            })
            .catch(() => {
              resolve(container);
            });
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
