import * as graphql from "@nestjs/graphql";
import { UserPreferencesResolverBase } from "./base/userPreferences.resolver.base";
import { UserPreferences } from "./base/UserPreferences";
import { UserPreferencesService } from "./userPreferences.service";

@graphql.Resolver(() => UserPreferences)
export class UserPreferencesResolver extends UserPreferencesResolverBase {
  constructor(protected readonly service: UserPreferencesService) {
    super(service);
  }
}
