import { InputType, Field } from '@nestjs/graphql';

import { ILoginRequest } from '@gmahechas/common-nestjs';

@InputType()
export class LoginRequestInput implements ILoginRequest {
  @Field() userName: string;
  @Field() userPassword: string;
}