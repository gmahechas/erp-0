import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IUser } from './user.interface';
import { PersonType } from '../../ms300/person/person.type';
import { UserProfileType } from '../user-profile/user-profile.type';

@ObjectType()
export class UserType implements IUser {
  @Field() id: string;
  @Field() userName: string;
  userPassword: string;
  @Field() personId: string;
  @Field(() => PersonType) person: PersonType;
  @Field(() => [UserProfileType], { nullable: 'itemsAndList' }) userProfiles: UserProfileType[];
}