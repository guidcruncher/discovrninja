import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DownloadResult, FluentHttpClient, HttpClientResult } from "@helpers/fluenthttpclient";


@Injectable()
export class LinkdingService {
  private readonly logger = new Logger(LinkdingService.name);

  constructor(
    private configService: ConfigService,
  ) {}

}
