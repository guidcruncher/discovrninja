import { ContainerCatalog, PortainerTemplate, Templates } from "@customtypes/portainer-template";
import { DownloadResult, FluentHttpClient } from "@helpers/fluenthttpclient";
import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class PortainerService {
private readonly logger = new Logger(PortainerService.name);

constructor(private configService: ConfigService) {}

}
