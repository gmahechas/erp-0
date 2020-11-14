import { InputType, Field, ID } from '@nestjs/graphql';

import { IProfile } from '@gmahechas/common-nestjs';

@InputType()
export class ProfileCreateInput implements Partial<IProfile> {
  @Field() profileName: string;
  @Field() profileDescription: string;
}

@InputType()
export class ProfileSearchInput implements Partial<IProfile> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) profileName: string;
}

@InputType()
export class ProfileUpdateInput implements Partial<IProfile> {
  @Field() id: string;
  @Field({ nullable: true }) profileName: string;
  @Field({ nullable: true }) profileDescription: string;
}

@InputType()
export class ProfileDeleteInput implements Partial<IProfile> {
  @Field() id: string;
}