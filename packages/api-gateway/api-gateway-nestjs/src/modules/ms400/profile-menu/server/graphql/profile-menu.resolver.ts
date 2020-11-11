import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  ProfileMenuType, ProfileType, MenuType,
  profileMenuJoiSchema, IProfile, IMenu, BaseResolver,
  ProfileMenuCreateInput, ProfileMenuSearchInput,
  ProfileMenuUpdateInput, ProfileMenuDeleteInput
} from '@gmahechas/common-nestjs';

import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms400/profile-menu/client/grpc/profile-menu-grpc.service'
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/profile/client/grpc/profile-grpc.service';
import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms400/menu/client/grpc/menu-grpc.service';

@Resolver(() => ProfileMenuType)
export class ProfileMenuResolver extends BaseResolver(
    ProfileMenuType,
    ProfileMenuCreateInput, ProfileMenuSearchInput,
    ProfileMenuUpdateInput, ProfileMenuDeleteInput,
    'ProfileMenu', profileMenuJoiSchema
  ) implements OnModuleInit {

  private profileGrpcService: ProfileGrpcService;
  private menuGrpcService: MenuGrpcService;

  constructor(
    private readonly profileMenuGrpcService: ProfileMenuGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(profileMenuGrpcService); }

  onModuleInit(): void {
    this.profileGrpcService = this.moduleRef.get(ProfileGrpcService, { strict: false });
    this.menuGrpcService = this.moduleRef.get(MenuGrpcService, { strict: false });
  }

  @ResolveField(() => ProfileType)
  profile(@Parent() entity: ProfileMenuType): Observable<Partial<IProfile>> {
    return this.profileGrpcService.searchById({ entity: { id: entity.profileId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => MenuType)
  menu(@Parent() entity: ProfileMenuType): Observable<Partial<IMenu>> {
    return this.menuGrpcService.searchById({ entity: { id: entity.menuId } }).pipe(pluck('entity'));
  }

}
