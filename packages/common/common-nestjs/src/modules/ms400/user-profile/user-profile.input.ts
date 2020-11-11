import { InputType, Field, ID } from '@nestjs/graphql';

import { IUserProfile } from './user-profile.interface';

@InputType()
export class UserProfileCreateInput implements Partial<IUserProfile> {
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
}

@InputType()
export class UserProfileSearchInput implements Partial<IUserProfile> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) userProfileStatus: boolean;
  @Field({ nullable: true }) userId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class UserProfileUpdateInput implements Partial<IUserProfile> {
  @Field() id: string;
  @Field({ nullable: true }) userProfileStatus: boolean;
  @Field({ nullable: true }) userId: string;
  @Field({ nullable: true }) profileId: string;
}

@InputType()
export class UserProfileDeleteInput implements Partial<IUserProfile> {
  @Field() id: string;
}