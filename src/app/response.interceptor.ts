import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T> {
  readonly omittedProperties = ["_s", "my_super_secret_secret"];

  intercept(context: ExecutionContext, next: CallHandler): Observable<T> {
    return next.handle().pipe(map((data) => this.sanitizeProperties(data)));
  }

  private sanitizeProperties(data: any): any {
    if (Array.isArray(data)) {
      return data.map((item) => this.sanitizeProperties(item));
    }
    if (typeof data === "object" && data !== null) {
      const sanitizedData = {};
      for (const key in data) {
        if (!this.omittedProperties.includes(key)) {
          sanitizedData[key] = this.sanitizeProperties(data[key]);
        }
      }
      return sanitizedData;
    }
    return data;
  }
}
