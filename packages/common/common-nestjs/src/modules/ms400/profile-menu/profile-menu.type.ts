import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IProfileMenu } from './profile-menu.interface';
import { ProfileType } from '../profile/profile.type';
import { MenuType } from '../menu/menu.type';

@ObjectType()
export class ProfileMenuType implements IProfileMenu {
  @Field() id: string;
  @Field() profileMenuStatus: boolean;
  @Field() menuId: string;
  @Field() profileId: string;
  @Field(() => ProfileType) profile: ProfileType;
  @Field(() => MenuType) menu: MenuType;
}