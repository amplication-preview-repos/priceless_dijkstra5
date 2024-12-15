import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventRecordService } from "./eventRecord.service";
import { EventRecordControllerBase } from "./base/eventRecord.controller.base";

@swagger.ApiTags("eventRecords")
@common.Controller("eventRecords")
export class EventRecordController extends EventRecordControllerBase {
  constructor(protected readonly service: EventRecordService) {
    super(service);
  }
}
