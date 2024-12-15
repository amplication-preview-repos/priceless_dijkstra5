/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserPreferencesService } from "../userPreferences.service";
import { UserPreferencesCreateInput } from "./UserPreferencesCreateInput";
import { UserPreferences } from "./UserPreferences";
import { UserPreferencesFindManyArgs } from "./UserPreferencesFindManyArgs";
import { UserPreferencesWhereUniqueInput } from "./UserPreferencesWhereUniqueInput";
import { UserPreferencesUpdateInput } from "./UserPreferencesUpdateInput";

export class UserPreferencesControllerBase {
  constructor(protected readonly service: UserPreferencesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserPreferences })
  async createUserPreferences(
    @common.Body() data: UserPreferencesCreateInput
  ): Promise<UserPreferences> {
    return await this.service.createUserPreferences({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserPreferences] })
  @ApiNestedQuery(UserPreferencesFindManyArgs)
  async userPreferencesItems(
    @common.Req() request: Request
  ): Promise<UserPreferences[]> {
    const args = plainToClass(UserPreferencesFindManyArgs, request.query);
    return this.service.userPreferencesItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserPreferences })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userPreferences(
    @common.Param() params: UserPreferencesWhereUniqueInput
  ): Promise<UserPreferences | null> {
    const result = await this.service.userPreferences({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserPreferences })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserPreferences(
    @common.Param() params: UserPreferencesWhereUniqueInput,
    @common.Body() data: UserPreferencesUpdateInput
  ): Promise<UserPreferences | null> {
    try {
      return await this.service.updateUserPreferences({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserPreferences })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserPreferences(
    @common.Param() params: UserPreferencesWhereUniqueInput
  ): Promise<UserPreferences | null> {
    try {
      return await this.service.deleteUserPreferences({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
