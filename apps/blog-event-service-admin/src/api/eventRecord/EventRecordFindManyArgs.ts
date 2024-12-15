import { EventRecordWhereInput } from "./EventRecordWhereInput";
import { EventRecordOrderByInput } from "./EventRecordOrderByInput";

export type EventRecordFindManyArgs = {
  where?: EventRecordWhereInput;
  orderBy?: Array<EventRecordOrderByInput>;
  skip?: number;
  take?: number;
};
