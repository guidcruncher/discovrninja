import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private logger: Logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status = exception.getStatus();

this.logger.error("Error on " + request.url, exception);

    if (request.url.startsWith("/api")) {
      response.status(status).send({
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
          message: exception.message,
          timestamp: new Date().toISOString(),
          path: request.url,
        },
        { layout: "./layouts/login.hbs" },
      );
    }
  }
}
