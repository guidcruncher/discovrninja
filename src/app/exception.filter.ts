import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
  UnauthorizedException,
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

    if (exception instanceof UnauthorizedException) {
      if (request.url.toLowerCase().startsWith("/api")) {
        response.hijack();
        response.raw.statusCode = 302;
        response.raw.writeHead(302, { "Content-Type": "application/json" });
        response.raw.write('{"status": 401, "message": "Unauthorized"}');
        response.raw.end();
      } else {
        this.logger.error("Redirecting to login");
        response.hijack();
        response.raw.statusCode = 302;
        response.raw.writeHead(302, { location: "/login" });
        response.raw.end();
      }
      return;
    }

    this.logger.error(
      "Error in " + request.method + " " + request.url,
      exception,
      exception ? exception.stack : null,
    );
    const buildDate = new Date(0);
    buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE ?? "0"));

    if (request.url.startsWith("/api")) {
      response.status(status).send({
        status: status,
        name: exception ? exception.name : "",
        message: exception
          ? (exception.message ?? "Internal Server Error")
          : "Internal Server Error",
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
          name: exception ? exception.name : "",
          message: exception
            ? (exception.message ?? "Internal Server Error")
            : "Internal Server Error",
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
