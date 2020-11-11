import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  UserProfileType, UserType, ProfileType,
  userProfileJoiSchema, IUser, IProfile, BaseResolver,
  UserProfileCreateInput, UserProfileSearchInput,
  UserProfileUpdateInput, UserProfileDeleteInput
} from '@gmahechas/common-nestjs';

import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/user-profile/client/grpc/user-profile-grpc.service'
import { UserGrpcService } from '@api-gateway-nestjs/modules/ms400/user/client/grpc/user-grpc.service';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/profile/client/grpc/profile-grpc.service';

@Resolver(() => UserProfileType)
export class UserProfileResolver extends BaseResolver(
    UserProfileType,
    UserProfileCreateInput, UserProfileSearchInput,
    UserProfileUpdateInput, UserProfileDeleteInput,
    'UserProfile', userProfileJoiSchema
  ) implements OnModuleInit {

  private userGrpcService: UserGrpcService;
  private profileGrpcService: ProfileGrpcService;

  constructor(
    private readonly userProfileGrpcService: UserProfileGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(userProfileGrpcService); }

  onModuleInit(): void {
    this.userGrpcService = this.moduleRef.get(UserGrpcService, { strict: false });
    this.profileGrpcService = this.moduleRef.get(ProfileGrpcService, { strict: false });
  }

  @ResolveField(() => UserType)
  user(@Parent() entity: UserProfileType): Observable<Partial<IUser>> {
    return this.userGrpcService.searchById({ entity: { id: entity.userId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => ProfileType)
  profile(@Parent() entity: UserProfileType): Observable<Partial<IProfile>> {
    return this.profileGrpcService.searchById({ entity: { id: entity.profileId } }).pipe(pluck('entity'));
  }

}
