import * as graphql from "@nestjs/graphql";
import { EventRecordResolverBase } from "./base/eventRecord.resolver.base";
import { EventRecord } from "./base/EventRecord";
import { EventRecordService } from "./eventRecord.service";

@graphql.Resolver(() => EventRecord)
export class EventRecordResolver extends EventRecordResolverBase {
  constructor(protected readonly service: EventRecordService) {
    super(service);
  }
}
