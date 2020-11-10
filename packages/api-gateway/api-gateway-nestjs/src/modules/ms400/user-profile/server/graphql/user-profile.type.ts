import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IUserProfile } from '@gmahechas/common-nestjs';
import { UserType } from '@api-gateway-nestjs/modules/ms400/user/server/graphql/user.type';
import { ProfileType } from '@api-gateway-nestjs/modules/ms400/profile/server/graphql/profile.type';

@ObjectType()
export class UserProfileType implements IUserProfile {
  @Field(() => ID) id: string;
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
  @Field(() => UserType) user: UserType;
  @Field(() => ProfileType) profile: ProfileType;
}