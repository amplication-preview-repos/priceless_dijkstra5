import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventRecordServiceBase } from "./base/eventRecord.service.base";

@Injectable()
export class EventRecordService extends EventRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
