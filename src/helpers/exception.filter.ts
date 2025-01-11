import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
export class ErrorExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger(ErrorExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error("Error on " + request.url, exception);
    const buildDate = new Date(0);
    buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE ?? "0"));

    if (request.url.startsWith("/api")) {
      response.status(status).send({
        status: status,
        name: exception.name,
        message: exception.message ?? "Internal Server Error",
        timestamp: new Date().toISOString(),
        path: request.url,
        production: (process.env.NODE_ENV ?? "") == "production",
        insideDocker: process.env.IN_DOCKER ?? false,
        version: process.env.PACKAGE_VERSION ?? "development",
        buildDate: buildDate,
      });
    } else {
      response.view(
        "error.hbs",
        {
          status: status,
          exception: exception,
          name: exception.name,
          message: exception.message ?? "Internal Server Error",
          timestamp: new Date().toISOString(),
          path: request.url,
          production: (process.env.NODE_ENV ?? "") == "production",
          insideDocker: process.env.IN_DOCKER ?? false,
          version: process.env.PACKAGE_VERSION ?? "development",
          buildDate: buildDate,
        },
        { layout: "./layouts/login.hbs" },
      );
    }
  }
}
