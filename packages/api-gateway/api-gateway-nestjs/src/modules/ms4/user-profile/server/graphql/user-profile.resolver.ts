import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  userProfileJoiSchema,
  IUser,
  IProfile,
} from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';
import { UserProfileType } from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.type';
import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';
import { UserType } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.type';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';
import { ProfileType } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.type';

import {
  UserProfileCreateInput,
  UserProfileSearchInput,
  UserProfileUpdateInput,
  UserProfileDeleteInput,
} from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.input';

@Resolver(() => UserProfileType)
export class UserProfileResolver
  extends BaseResolver(
    UserProfileType,
    UserProfileCreateInput,
    UserProfileSearchInput,
    UserProfileUpdateInput,
    UserProfileDeleteInput,
    'UserProfile',
    userProfileJoiSchema,
  )
  implements OnModuleInit {
  private userGrpcService: UserGrpcService;
  private profileGrpcService: ProfileGrpcService;

  constructor(
    private readonly userProfileGrpcService: UserProfileGrpcService,
    private readonly moduleRef: ModuleRef,
  ) {
    super(userProfileGrpcService);
  }

  onModuleInit(): void {
    this.userGrpcService = this.moduleRef.get(UserGrpcService, {
      strict: false,
    });
    this.profileGrpcService = this.moduleRef.get(ProfileGrpcService, {
      strict: false,
    });
  }

  @ResolveField(() => UserType)
  user(@Parent() entity: UserProfileType): Observable<Partial<IUser>> {
    return this.userGrpcService
      .searchById({ entity: { id: entity.userId } })
      .pipe(pluck('entity'));
  }

  @ResolveField(() => ProfileType)
  profile(@Parent() entity: UserProfileType): Observable<Partial<IProfile>> {
    return this.profileGrpcService
      .searchById({ entity: { id: entity.profileId } })
      .pipe(pluck('entity'));
  }
}
