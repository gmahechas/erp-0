import { ObjectType, Field } from '@nestjs/graphql';

import { IProfile } from '@gmahechas/common-nestjs';
import { ProfileMenuType } from '@api-gateway-nestjs/modules/ms4/profile-menu/server/graphql/profile-menu.type';

@ObjectType()
export class ProfileType implements IProfile {
  @Field() id: string;
  @Field() profileName: string;
  @Field() profileDescription: string;
  @Field(() => [ProfileMenuType], { nullable: 'itemsAndList' }) profileMenus: ProfileMenuType[];
}