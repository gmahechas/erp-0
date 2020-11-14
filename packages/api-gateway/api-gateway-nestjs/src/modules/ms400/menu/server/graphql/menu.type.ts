import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IMenu } from '@gmahechas/common-nestjs';
import { ProfileMenuType } from '@api-gateway-nestjs/modules/ms400/profile-menu/server/graphql/profile-menu.type';

@ObjectType()
export class MenuType implements IMenu {
  @Field() id: string;
  @Field() menuName: string;
  @Field() menuDescription: string;
  @Field() menuUri: string;
  @Field() menuOrder: number;
  @Field() menuIdParent: string;
  @Field(() => [ProfileMenuType], { nullable: 'itemsAndList' }) profilesMenu: ProfileMenuType[];
}
