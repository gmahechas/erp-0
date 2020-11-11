import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IMenu } from './menu.interface';
import { ProfileMenuType } from '../profile-menu/profile-menu.type';

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
