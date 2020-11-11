import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  ProfileType, ProfileMenuType,
  profileJoiSchema, IProfileMenu, BaseResolver,
  ProfileCreateInput, ProfileSearchInput,
  ProfileUpdateInput, ProfileDeleteInput
} from '@gmahechas/common-nestjs';

import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/profile/client/grpc/profile-grpc.service'
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms400/profile-menu/client/grpc/profile-menu-grpc.service';

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
