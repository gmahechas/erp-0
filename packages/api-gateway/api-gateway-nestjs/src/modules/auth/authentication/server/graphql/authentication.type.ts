import { ObjectType, Field } from '@nestjs/graphql';

import { ILoginResponse } from '@gmahechas/common-nestjs';

@ObjectType()
export class LoginResponseType implements ILoginResponse {
  @Field() successAuthUser: boolean;
}