import { Body, Controller, Get, Post, Query, Res } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
const axios = require("axios").default;

@Controller("api/views")
export class ViewsController {
  constructor(private configService: ConfigService) {}

  /**
   * Renders a handlebars template given the passed "POST"ed data
   * @returns HTML of template
   */
  @Post("render")
  async renderViewFromJson(
    @Query("template") viewname: string,
    @Body() data: any,
    @Res() res,
  ) {
    res.view(viewname + ".hbs", data, { layout: "layouts/blank.hbs" });
  }

  @Get("render")
  async renderViewFromApiCall(
    @Query("template") viewname: string,
    @Query("api") api: string,
    @Res() res,
  ) {
    let url = api;
    if (api.startsWith("/")) {
      url = "http://127.0.0.1:5001" + api;
    }

    axios
      .get(url)
      .then((response) => {
        res.view(viewname + ".hbs", response.data, {
          layout: "layouts/blank.hbs",
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
}
