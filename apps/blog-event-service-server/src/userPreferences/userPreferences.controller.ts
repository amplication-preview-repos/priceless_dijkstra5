import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPreferencesService } from "./userPreferences.service";
import { UserPreferencesControllerBase } from "./base/userPreferences.controller.base";

@swagger.ApiTags("userPreferences")
@common.Controller("userPreferences")
export class UserPreferencesController extends UserPreferencesControllerBase {
  constructor(protected readonly service: UserPreferencesService) {
    super(service);
  }
}
