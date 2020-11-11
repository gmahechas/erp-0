import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IUserProfile } from './user-profile.interface';
import { UserType } from '../user/user.type';
import { ProfileType } from '../profile/profile.type';

@ObjectType()
export class UserProfileType implements IUserProfile {
  @Field() id: string;
  @Field() userProfileStatus: boolean;
  @Field() userId: string;
  @Field() profileId: string;
  @Field(() => UserType) user: UserType;
  @Field(() => ProfileType) profile: ProfileType;
}