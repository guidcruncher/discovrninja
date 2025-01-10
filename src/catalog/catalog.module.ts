import { Module } from "@nestjs/common";
import { PortainerService } from "@services/portainer.service";

@Module({
imports: [],
controllers: [ PortainerController, ],
providers:[ PortainerService, ]
exports: [],
})
export class CatalogModule {}
