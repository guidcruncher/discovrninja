import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common";

@Catch(UnauthorizedException)
export class UnauthorizedFilter implements ExceptionFilter {
  private logger: Logger = new Logger(UnauthorizedFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status = exception.getStatus();
    const uri: URL = new URL(request.url.toLowerCase());

    this.logger.error("Error on " + request.url, exception);
    if (uri.pathname.startsWith("/api")) {
      response.status(status).send({
        status: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    } else {
       response.redirect("/login");
    }
  }
}
