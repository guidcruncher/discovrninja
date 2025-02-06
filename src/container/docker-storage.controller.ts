import { Volume } from "@data/dto/volume.dto";
import { Desktop } from "@desktop/decorators";
import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
  Res,
} from "@nestjs/common";

import { DockerStorageService } from "./docker-storage.service";
import { StorageScriptService } from "./storage-script.service";

@Controller("/")
export class DockerStorageController {
  constructor(
    private readonly dockerStorageService: DockerStorageService,
    private readonly storageScriptService: StorageScriptService,
  ) {}

  @Get("api/docker/storage")
  public listVolumes() {
    return this.dockerStorageService.listVolumes();
  }

  @Get("api/docker/storage/volume/:name/script")
  public getStorageScript(
    @Query("preferdb") preferDb,
    @Param("name") name: string,
  ): any {
    return new Promise((resolve, reject) => {
      if (preferDb == "yes") {
        this.dockerStorageService
          .getVolumeFromDatabase(name)
          .then((vol) => {
            const script = { create: [], delete: [] };
            script.create = this.storageScriptService.getCreate(vol as Volume);
            script.delete = this.storageScriptService.getDelete(vol as Volume);
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        this.dockerStorageService
          .getVolume(name)
          .then((vol) => {
            const script = { create: [], delete: [] };
            script.create = this.storageScriptService.getCreate(vol as Volume);
            script.delete = this.storageScriptService.getDelete(vol as Volume);
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  @Get("api/docker/volume/:name/delete")
  public deleteVolume(@Param("name") name) {
    return this.dockerStorageService.deleteVolume(name);
  }

  @Get("admin/storage/volume/:name/script")
  @Header("content-type", "text/plain")
  @Header("content-disposition", "attachment; filename='volumescript.txt'")
  public getVolumeScriptForDownload(
    @Param("name") name,
    @Query("preferdb") preferDb,
  ) {
    return new Promise((resolve, reject) => {
      if (preferDb == "yes") {
        this.dockerStorageService
          .getVolumeFromDatabase(name)
          .then((vol) => {
            const script = { create: [], delete: [] };
            script.create = this.storageScriptService.getCreate(vol as Volume);
            script.delete = this.storageScriptService.getDelete(vol as Volume);
            const scr =
              "# Delete volume\n" +
              script.delete.join("\n") +
              "\n# Create volume\n" +
              script.create.join("\n");
            resolve(scr);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        this.dockerStorageService
          .getVolume(name)
          .then((vol) => {
            const script = { create: [], delete: [] };
            script.create = this.storageScriptService.getCreate(vol as Volume);
            script.delete = this.storageScriptService.getDelete(vol as Volume);
            const scr =
              "# Delete volume\n" +
              script.delete.join("\n") +
              "\n# Create volume\n" +
              script.create.join("\n");
            resolve(scr);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  @Get("api/docker/storage/:name")
  public getVolume(@Param("name") name: string) {
    return this.dockerStorageService.getVolume(name);
  }

  @Post("api/docker/storage/update")
  public updateVolume(@Body() data) {
    return this.dockerStorageService.updateVolume(data);
  }

  @Get("admin/editvolume")
  public editVolumeView(@Desktop() size, @Res() res, @Query("name") name) {
    this.storageScriptService
      .getVolumeMountRoot()
      .then((mountRoot) => {
        this.dockerStorageService
          .getVolume(name)
          .then((vol) => {
            res.view(
              "storageedit.hbs",
              { size: size, mountRoot: mountRoot, volume: vol, create: false },
              { layout: "./layouts/layout.hbs" },
            );
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  @Get("admin/createvolume")
  public createVolumeView(@Desktop() size, @Res() res) {
    this.storageScriptService
      .getVolumeMountRoot()
      .then((mountRoot) => {
        res.view(
          "storageedit.hbs",
          {
            size: size,
            mountRoot: mountRoot,
            volume: new Volume(),
            create: true,
          },
          { layout: "./layouts/layout.hbs" },
        );
      })
      .catch((err) => {
        res.send(err);
      });
  }

  @Get("admin/storage")
  public storageAdminView(@Desktop() size, @Res() res) {
    this.dockerStorageService
      .listVolumes()
      .then((volumes) => {
        this.dockerStorageService
          .getImageStorageStats()
          .then((images) => {
            res.view(
              "storageadmin.hbs",
              { size: size, images: images, volumes: volumes },
              { layout: "./layouts/layout.hbs" },
            );
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
