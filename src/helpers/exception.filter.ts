import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from "@nestjs/common";
import { Response } from "express";
import { Exception } from "@nestjs/common";

@Catch(Exception)
export class ErrorExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger(UnauthorizedFilter.name);

  catch(exception: Exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status = exception.getStatus();
    const uri: URL = new URL(request.url.toLowerCase());

    this.logger.error("Error on " + request.url, exception);
    if (uri.pathname.startsWith("/api")) {
      response
        .status(status)
        .send({
          status: status,
          message: exception.message,
          timestamp: new Date().toISOString(),
          path: request.url,
        });
    } else {
      response.view(
        "error.hbs",
        {
          status: status,
          exception: exception,
          timestamp: new Date().toISOString(),
          path: request.url,
        },
        { layout: "./layouts/login.hbs" },
      );
    }
  }
}
