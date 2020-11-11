import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  MenuType, ProfileMenuType,
  menuJoiSchema, IProfileMenu, BaseResolver,
  MenuCreateInput, MenuSearchInput,
  MenuUpdateInput, MenuDeleteInput
} from '@gmahechas/common-nestjs';

import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms400/menu/client/grpc/menu-grpc.service'
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms400/profile-menu/client/grpc/profile-menu-grpc.service';

@Resolver(() => MenuType)
export class MenuResolver extends BaseResolver(
    MenuType,
    MenuCreateInput, MenuSearchInput,
    MenuUpdateInput, MenuDeleteInput,
    'Menu', menuJoiSchema
  ) implements OnModuleInit {

  private profileMenuGrpcService: ProfileMenuGrpcService;

  constructor(
    private readonly menuGrpcService: MenuGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(menuGrpcService); }

  onModuleInit(): void {
    this.profileMenuGrpcService = this.moduleRef.get(ProfileMenuGrpcService, { strict: false });
  }

  @ResolveField(() => [ProfileMenuType])
  profilesMenu(@Parent() entity: MenuType): Observable<Partial<IProfileMenu>[]> {
    return this.profileMenuGrpcService.searchMany({ entities: [{ menuId: entity.id }] }).pipe(pluck('entities'));
  }
  
}
