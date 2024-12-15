import { EventRecord as TEventRecord } from "../api/eventRecord/EventRecord";

export const EVENTRECORD_TITLE_FIELD = "id";

export const EventRecordTitle = (record: TEventRecord): string => {
  return record.id?.toString() || String(record.id);
};
