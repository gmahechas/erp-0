import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { profileJoiSchema, IProfileMenu } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';
import { ProfileType } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.type';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';
import { ProfileMenuType } from '@api-gateway-nestjs/modules/ms4/profile-menu/server/graphql/profile-menu.type';

import {
  ProfileCreateInput, ProfileSearchInput,
  ProfileUpdateInput, ProfileDeleteInput
} from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.input';

@Resolver(() => ProfileType)
export class ProfileResolver extends BaseResolver(
    ProfileType,
    ProfileCreateInput, ProfileSearchInput,
    ProfileUpdateInput, ProfileDeleteInput,
    'Profile', profileJoiSchema
  ) implements OnModuleInit { 

    private profileMenuGrpcService: ProfileMenuGrpcService;

    constructor(
      private readonly profileGrpcService: ProfileGrpcService,
      private readonly moduleRef: ModuleRef
    ) { super(profileGrpcService); }

    onModuleInit(): void {
      this.profileMenuGrpcService = this.moduleRef.get(ProfileMenuGrpcService, { strict: false });
    }

    @ResolveField(() => [ProfileMenuType])
    profileMenus(@Parent() entity: ProfileType): Observable<Partial<IProfileMenu>[]> {
      return this.profileMenuGrpcService.searchMany({ entities: [{ profileId: entity.id }] }).pipe(pluck('entities'));
    }

  }
