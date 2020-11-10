import { InputType, Field, ID } from '@nestjs/graphql';

import { IUser } from '@gmahechas/common-nestjs';

@InputType()
export class UserCreateInput implements Partial<IUser> {
  @Field() userName: string;
  @Field() userPassword: string;
  @Field() personId: string;
}

@InputType()
export class UserSearchInput implements Partial<IUser> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) userName: string;
  @Field({ nullable: true }) personId: string;
}

@InputType()
export class UserUpdateInput implements Partial<IUser> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) userName: string;
  @Field({ nullable: true }) userPassword: string;
  @Field({ nullable: true }) personId: string;
}

@InputType()
export class UserDeleteInput implements Partial<IUser> {
  @Field(() => ID) id: string;
}