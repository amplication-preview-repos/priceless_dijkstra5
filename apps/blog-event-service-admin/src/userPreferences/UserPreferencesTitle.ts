import { UserPreferences as TUserPreferences } from "../api/userPreferences/UserPreferences";

export const USERPREFERENCES_TITLE_FIELD = "id";

export const UserPreferencesTitle = (record: TUserPreferences): string => {
  return record.id?.toString() || String(record.id);
};
