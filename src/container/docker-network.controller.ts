import { Network } from "@data/dto/network.dto";
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

import { DockerNetworkService } from "./docker-network.service";
import { NetworkScriptService } from "./network-script.service";

@Controller("/")
export class DockerNetworkController {
  constructor(
    private readonly dockerNetworkService: DockerNetworkService,
    private readonly networkScriptService: NetworkScriptService,
  ) {}

  @Get("api/docker/network")
  public listNetworks() {
    return this.dockerNetworkService.listNetworks();
  }

  @Get("api/docker/network/:name")
  public getNetwork(@Param("name") name: string) {
    return this.dockerNetworkService.getNetwork(name);
  }

  @Get("api/docker/network/:name/delete")
  public deleteNetwork(@Param("name") name) {
    return this.dockerNetworkService.deleteNetwork(name);
  }

  @Get("admin/network/:name/script")
  @Header("content-type", "text/plain")
  @Header("content-disposition", "attachment; filename='networkscript.txt'")
  public getNetworkScriptForDownload(
    @Param("name") name,
    @Query("preferdb") preferDb,
  ) {
    return new Promise((resolve, reject) => {
      if (preferDb == "yes") {
        this.dockerNetworkService
          .getNetworkFromDatabase(name)
          .then((net) => {
            const scr = { create: [], attach: [], detach: [], delete: [] };
            scr.create = this.networkScriptService.getCreate(net as Network);
            scr.attach = this.networkScriptService.getAttach(net as Network);
            scr.detach = this.networkScriptService.getDetach(net as Network);
            scr.delete = this.networkScriptService.getDelete(net as Network);
            const script =
              "# Detach containers\n" +
              (scr.detach ?? []).join("\n") +
              "\n\n# Delete old network \n" +
              (scr.delete ?? []).join("\n") +
              "\n\n# Create new network\n" +
              (scr.create ?? []).join(" \\\n") +
              "\n\n# Reattach containers\n" +
              (scr.attach ?? []).join("\n");
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        this.dockerNetworkService
          .getNetwork(name)
          .then((net) => {
            const scr = { create: [], attach: [], detach: [], delete: [] };
            scr.create = this.networkScriptService.getCreate(net as Network);
            scr.attach = this.networkScriptService.getAttach(net as Network);
            scr.detach = this.networkScriptService.getDetach(net as Network);
            scr.delete = this.networkScriptService.getDelete(net as Network);
            const script =
              "# Detach containers\n" +
              (scr.detach ?? []).join("\n") +
              "\n\n# Delete old network \n" +
              (scr.delete ?? []).join("\n") +
              "\n\n# Create new network\n" +
              (scr.create ?? []).join(" \\\n") +
              "\n\n# Reattach containers\n" +
              (scr.attach ?? []).join("\n");
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  @Get("api/docker/network/:name/script")
  public getNetworkScript(
    @Query("preferdb") preferDb,
    @Param("name") name: string,
  ): any {
    return new Promise((resolve, reject) => {
      if (preferDb == "yes") {
        this.dockerNetworkService
          .getNetworkFromDatabase(name)
          .then((net) => {
            const script = { create: [], attach: [], detach: [], delete: [] };
            script.create = this.networkScriptService.getCreate(net as Network);
            script.attach = this.networkScriptService.getAttach(net as Network);
            script.detach = this.networkScriptService.getDetach(net as Network);
            script.delete = this.networkScriptService.getDelete(net as Network);
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        this.dockerNetworkService
          .getNetwork(name)
          .then((net) => {
            const script = { create: [], attach: [], detach: [], delete: [] };
            script.create = this.networkScriptService.getCreate(net as Network);
            script.attach = this.networkScriptService.getAttach(net as Network);
            script.detach = this.networkScriptService.getDetach(net as Network);
            script.delete = this.networkScriptService.getDelete(net as Network);
            resolve(script);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  }

  @Post("api/docker/network/update/:name")
  public updateNetwork(@Param("name") name, @Body() data) {
    return this.dockerNetworkService.saveNetwork(data);
  }

  @Post("api/docker/network/create")
  public createNetwork(@Body() data) {
    return this.dockerNetworkService.saveNetwork(data);
  }

  @Get("admin/createnetwork")
  public networkCreateView(@Desktop() size, @Res() res) {
    this.dockerNetworkService.listNetworks().then((netsdata) => {
      const networks = netsdata
        .map((n) => {
          return { Id: n.Id, Name: n.Name };
        })
        .sort((a, b) => {
          return a.Name.localeCompare(b.Name);
        });
      res.view(
        "networkedit.hbs",
        {
          size: size,
          network: new Network(),
          networkId: "",
          create: true,
          networks: networks,
        },
        { layout: "./layouts/layout.hbs" },
      );
    });
  }

  @Get("admin/editnetwork")
  public networkEditView(@Desktop() size, @Res() res, @Query("id") id) {
    this.dockerNetworkService.listNetworks().then((netsdata) => {
      this.dockerNetworkService
        .getNetwork(id)
        .then((data) => {
          const networks = netsdata
            .map((n) => {
              return { Id: n.Id, Name: n.Name };
            })
            .sort((a, b) => {
              return a.Name.localeCompare(b.Name);
            });
          res.view(
            "networkedit.hbs",
            {
              size: size,
              networkId: id,
              network: data,
              create: false,
              networks: networks,
            },
            { layout: "./layouts/layout.hbs" },
          );
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }

  @Get("admin/network")
  public networkAdminView(@Desktop() size, @Res() res) {
    this.dockerNetworkService
      .listNetworks()
      .then((networks) => {
        res.view(
          "networkadmin.hbs",
          {
            size: size,
            hostIpAddress: process.env.HOST_IP ?? "Unknown",
            networks: networks,
          },
          { layout: "./layouts/layout.hbs" },
        );
      })
      .catch((err) => {
        res.send(err);
      });
  }
}
