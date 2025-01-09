 import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class ErrorExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger(ErrorExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status = 500;
    const uri: URL = new URL(request.url.toLowerCase());

    this.logger.error("Error on " + request.url, exception);
    if (uri.pathname.startsWith("/api")) {
      response
        .status(status)
        .send({
          status: status,
          message: "Internal Server Error",
          timestamp: new Date().toISOString(),
          path: request.url,
        });
    } else {
      response.view(
        "error.hbs",
        {
          status: status,
          exception: exception,
          message: "Internal Server Error",
          timestamp: new Date().toISOString(),
          path: request.url,
        },
        { layout: "./layouts/login.hbs" },
      );
    }
  }
}
