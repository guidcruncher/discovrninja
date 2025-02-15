import { Controller, Get, Query } from "@nestjs/common";

import { ImageUpdateService } from "./image-update.service";

@Controller("api/docker/image")
export class DockerImageController {
  constructor(private readonly updateService: ImageUpdateService) {}

  @Get("update/check")
  public updateCheck(@Query("ref") ref: string) {
    return new Promise((resolve, reject) => {
      this.updateService
        .updateCheck(ref)
        .then((r) => {
          resolve(r);
        })
        .catch((err) => {
          resolve({});
        });
    });
  }
}
