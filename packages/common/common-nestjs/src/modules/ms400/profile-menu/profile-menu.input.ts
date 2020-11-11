import { InputType, Field, ID } from '@nestjs/graphql';

import { IProfileMenu } from './profile-menu.interface';

@InputType()
export class ProfileMenuCreateInput implements Partial<IProfileMenu> {
  @Field() profileMenuStatus: boolean;
  @Field() menuId: string;
  @Field() profileId: string;
}

@InputType()
export class ProfileMenuSearchInput implements Partial<IProfileMenu> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) profileMenuStatus: boolean;
  @Field({ nullable: true }) menuId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class ProfileMenuUpdateInput implements Partial<IProfileMenu> {
  @Field() id: string;
  @Field({ nullable: true }) profileMenuStatus: boolean;
  @Field({ nullable: true }) menuId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class ProfileMenuDeleteInput implements Partial<IProfileMenu> {
  @Field() id: string;
}