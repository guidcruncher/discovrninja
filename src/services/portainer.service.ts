import {
  Template,
} from "@customtypes/portainer-template";
import { StringBuilder } from "@customtypes/stringbuilder";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PortainerService {
  private readonly logger = new Logger(PortainerService.name);

  constructor(private configService: ConfigService) {}

  public toDockerRun(t: Template) {
    const sb: StringBuilder = new StringBuilder();
    return sb.toStringDelimited(" && \/n");
  }
}
