import { Module } from "@nestjs/common";
import { UserPreferencesModuleBase } from "./base/userPreferences.module.base";
import { UserPreferencesService } from "./userPreferences.service";
import { UserPreferencesController } from "./userPreferences.controller";
import { UserPreferencesResolver } from "./userPreferences.resolver";

@Module({
  imports: [UserPreferencesModuleBase],
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService, UserPreferencesResolver],
  exports: [UserPreferencesService],
})
export class UserPreferencesModule {}
