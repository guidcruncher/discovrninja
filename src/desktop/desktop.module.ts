import { Schemas } from "@data/data.schemas";
import { Module } from "@nestjs/common";
import { DataModule } from "@data/data.module";

import { DesktopController } from "./desktop.controller";
import { DesktopService } from "./desktop.service";

@Module({
imports: [DataModule, Schemas.CompileModels()],
controllers: [DesktopController, 
],
providers: [DesktopService],
exports: [],
})
export class DesktopModule {}
