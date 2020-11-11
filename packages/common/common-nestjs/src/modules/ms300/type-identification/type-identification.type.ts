import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ITypeIdentification } from './type-identification.interface';

@ObjectType()
export class TypeIdentificationType implements ITypeIdentification {
  @Field() id: string;
  @Field() typeIdentificationDescription: string;
  @Field() typeIdentificationCode: string;
}