import { Module } from "@nestjs/common";
import { PortainerService } from "./portainer.service";
import { PortaineroController } from "./portainer.controller";

@Module({
  imports: [],
  controllers: [PortainerController],
  providers: [PortainerService],
  exports: [],
})
export class CatalogModule {}
