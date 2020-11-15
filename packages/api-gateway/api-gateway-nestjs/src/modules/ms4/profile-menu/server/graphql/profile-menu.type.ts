import { ObjectType, Field } from '@nestjs/graphql';

import { IProfileMenu } from '@gmahechas/common-nestjs';
import { ProfileType } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.type';
import { MenuType } from '@api-gateway-nestjs/modules/ms4/menu/server/graphql/menu.type';

@ObjectType()
export class ProfileMenuType implements IProfileMenu {
  @Field() id: string;
  @Field() profileMenuStatus: boolean;
  @Field() menuId: string;
  @Field() profileId: string;
  @Field(() => ProfileType) profile: ProfileType;
  @Field(() => MenuType) menu: MenuType;
}