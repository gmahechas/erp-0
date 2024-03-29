import { ObjectType, Field } from '@nestjs/graphql';

import { ITypeIdentification } from '@gmahechas/common-nestjs';

@ObjectType()
export class TypeIdentificationType implements ITypeIdentification {
  @Field() id: string;
  @Field() typeIdentificationDescription: string;
  @Field() typeIdentificationCode: string;
}
