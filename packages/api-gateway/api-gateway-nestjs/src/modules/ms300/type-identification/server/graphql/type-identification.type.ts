import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ITypeIdentification } from '@gmahechas/common-nestjs';

@ObjectType()
export class TypeIdentificationType implements ITypeIdentification {
  @Field(() => ID) id: string;
  @Field() typeIdentificationDescription: string;
  @Field() typeIdentificationCode: string;
}