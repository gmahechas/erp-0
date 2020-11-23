import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SigninRequestInput {
  @Field() userName: string;
  @Field() userPassword: string;
}
