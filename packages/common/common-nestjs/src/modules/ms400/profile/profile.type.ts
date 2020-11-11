import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IProfile } from './profile.interface';
import { ProfileMenuType } from '../profile-menu/profile-menu.type';

@ObjectType()
export class ProfileType implements IProfile {
  @Field() id: string;
  @Field() profileName: string;
  @Field() profileDescription: string;
  @Field(() => [ProfileMenuType], { nullable: 'itemsAndList' }) profileMenus: ProfileMenuType[];
}