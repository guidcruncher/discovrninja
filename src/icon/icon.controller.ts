import { Controller, Get, Param, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IconCDNService } from "./icon-cdn.service";
import { IconService } from "./icon.service";

@Controller("api/icons")
export class IconController {
  constructor(
    private configService: ConfigService,
    private iconService: IconService,
    private iconCDNService: IconCDNService,
  ) {}

  @Get("question")
  getQuestion(@Res() res) {
    res.headers({
      "Content-Type": "image/svg+xml",
      "Content-Disposition": 'inline; filename="question.svg"',
    });
    res.send(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>',
    );
  }

  @Get("r/:catalog/:slug")
  getIconUrl(@Param("catalog") catalog, @Param("slug") slug): string {
    const url = this.iconService.resolveIconUrl(catalog, slug);
    return url;
  }

  @Get("r/:catalog/:slug/resource")
  getIconUrlRedirect(
    @Param("catalog") catalog,
    @Param("slug") slug,
    @Res() res,
  ) {
    const url = this.iconService.resolveIconUrl(catalog, slug);
    res.status(302);
    res.redirect(url);
  }

  @Get("cdn")
  async getAllCDN(): Promise<any> {
    return this.iconCDNService.getAllSlugs();
  }

  @Get("cdn/:catalog")
  async getCDN(@Param("catalog") catalog): Promise<string[]> {
    return this.iconCDNService.getSlugs(catalog);
  }

  @Get("simpleicons/:slug")
  getSimpleIcon(@Param("slug") slug, @Res() res) {
    this.iconService
      .getSimpleIcon(slug)
      .then((result) => {
        res.headers(result.headers);
        res.send(result.data);
      })
      .catch((err) => {
        if (err.status) {
          if (err.status == 404) {
            res.status(404).send();
            return;
          }
          res.status(err.status);
        }
        res.send(err);
      });
  }

  @Get("selfhst/:slug")
  getSelfhstIcon(@Param("slug") slug, @Res() res) {
    this.iconService
      .getSelfhstIcon(slug)
      .then((result) => {
        res.headers(result.headers);
        res.send(result.data);
      })
      .catch((err) => {
        if (err.status) {
          if (err.status == 404) {
            res.status(404).send();
            return;
          }
          res.status(err.status);
        }
        res.send(err);
      });
  }

  @Get("dashboard/:slug")
  getDashboardIcon(@Param("slug") slug, @Res() res) {
    this.iconService
      .getDashboardIcon(slug)
      .then((result) => {
        res.headers(result.headers);
        res.send(result.data);
      })
      .catch((err) => {
        if (err.status) {
          if (err.status == 404) {
            res.status(404).send();
            return;
          }
          res.status(err.status);
        }
        res.send(err);
      });
  }

  @Get("fontawesome/:type/:slug")
  getFontAwesomeIcon(@Param("type") type, @Param("slug") slug, @Res() res) {
    this.iconService
      .getFontAwesomeIcon(type, slug)
      .then((result) => {
        res.headers(result.headers);
        res.send(result.data);
      })
      .catch((err) => {
        if (err.status) {
          if (err.status == 404) {
            res.status(404).send();
            return;
          }
          res.status(err.status);
        }
        res.send(err);
      });
  }

  @Get("query/:slug")
  getIcon(@Param("slug") slug, @Res() res) {
    return new Promise((resolve, reject) => {
      this.iconService
        .query(slug, true)
        .then((icons) => {
          if (icons.length > 0) {
            res.headers(icons[0].headers);
            res.send(icons[0].data);
          } else {
            this.getQuestion(res);
          }
          resolve(true);
        })
        .catch((err) => {
          this.getQuestion(res);
        });
    });
  }

  @Get("search/:slug")
  async searchForIcon(@Param("slug") slug) {
    return new Promise((resolve, reject) => {
      this.iconCDNService
        .query(slug, false)
        .then((icons) => {
          icons.forEach((ico) => {
            delete ico.data;
          });
          resolve(icons);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
