import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ITypePerson } from '@gmahechas/common-nestjs';

@ObjectType()
export class TypePersonType implements ITypePerson {
  @Field() id: string;
  @Field() typePersonDescription: string;
  @Field() typePersonCode: string;
}