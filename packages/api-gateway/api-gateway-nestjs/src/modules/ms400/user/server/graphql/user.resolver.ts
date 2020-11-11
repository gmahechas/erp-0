import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  UserType, PersonType, UserProfileType,
  userJoiSchema, IPerson, IUserProfile, BaseResolver,
  UserCreateInput, UserSearchInput,
  UserUpdateInput, UserDeleteInput
} from '@gmahechas/common-nestjs';

import { UserGrpcService } from '@api-gateway-nestjs/modules/ms400/user/client/grpc/user-grpc.service'
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms300/person/client/grpc/person-grpc.service';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/user-profile/client/grpc/user-profile-grpc.service';

@Resolver(() => UserType)
export class UserResolver extends BaseResolver(
    UserType,
    UserCreateInput, UserSearchInput,
    UserUpdateInput, UserDeleteInput,
    'User', userJoiSchema
  ) implements OnModuleInit {

  private personGrpcService: PersonGrpcService;
  private userProfileGrpcService: UserProfileGrpcService;

  constructor(
    private readonly userGrpcService: UserGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(userGrpcService); }

  onModuleInit(): void {
    this.personGrpcService = this.moduleRef.get(PersonGrpcService, { strict: false });
    this.userProfileGrpcService = this.moduleRef.get(UserProfileGrpcService, { strict: false });
  }

  @ResolveField(() => PersonType)
  person(@Parent() entity: UserType): Observable<Partial<IPerson>> {
    return this.personGrpcService.searchById({ entity: { id: entity.personId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [UserProfileType])
  userProfiles(@Parent() entity: UserType): Observable<Partial<IUserProfile>[]> {
    return this.userProfileGrpcService.searchMany({ entities: [{ userId: entity.id }] }).pipe(pluck('entities'));
  }

}
