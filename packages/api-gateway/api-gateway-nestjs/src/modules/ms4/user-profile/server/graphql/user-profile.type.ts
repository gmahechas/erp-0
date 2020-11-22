import { ObjectType, Field } from '@nestjs/graphql';

import { IUserProfile } from '@gmahechas/common-nestjs';
import { UserType } from '@api-gateway-nestjs/modules/ms4/user/server/graphql/user.type';
import { ProfileType } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.type';

@ObjectType()
export class UserProfileType implements IUserProfile {
  @Field() id: string;
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
  @Field(() => UserType) user: UserType;
  @Field(() => ProfileType) profile: ProfileType;
}
