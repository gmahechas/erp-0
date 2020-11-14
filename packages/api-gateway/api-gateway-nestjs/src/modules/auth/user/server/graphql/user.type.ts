import { ObjectType, Field } from '@nestjs/graphql';

import { IUser } from '@gmahechas/common-nestjs';
import { PersonType } from '@api-gateway-nestjs/modules/ms300/person/server/graphql/person.type';
import { UserProfileType } from '@api-gateway-nestjs/modules/auth/user-profile/server/graphql/user-profile.type';

@ObjectType()
export class UserType implements IUser {
  @Field() id: string;
  @Field() userName: string;
  userPassword: string;
  @Field() personId: string;
  @Field(() => PersonType) person: PersonType;
  @Field(() => [UserProfileType], { nullable: 'itemsAndList' }) userProfiles: UserProfileType[];
}