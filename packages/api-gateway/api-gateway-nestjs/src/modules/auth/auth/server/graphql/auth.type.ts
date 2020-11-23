import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class AuthSigninRequestType {
  @Field() userName: string;
  @Field() userPassword: string;
}

@ObjectType()
export class AuthSigninResponseType {
  @Field() successAuthUser: boolean;
}
