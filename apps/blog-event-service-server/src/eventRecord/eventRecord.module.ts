import { Module } from "@nestjs/common";
import { EventRecordModuleBase } from "./base/eventRecord.module.base";
import { EventRecordService } from "./eventRecord.service";
import { EventRecordController } from "./eventRecord.controller";
import { EventRecordResolver } from "./eventRecord.resolver";

@Module({
  imports: [EventRecordModuleBase],
  controllers: [EventRecordController],
  providers: [EventRecordService, EventRecordResolver],
  exports: [EventRecordService],
})
export class EventRecordModule {}
