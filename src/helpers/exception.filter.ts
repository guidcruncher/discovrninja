import { HttpException,
  HttpStatus,ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";

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

    if (request.url.startsWith("/api")) {
      response.status(status).send({
        status: status,
        message: exception.message ?? "Internal Server Error",
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
