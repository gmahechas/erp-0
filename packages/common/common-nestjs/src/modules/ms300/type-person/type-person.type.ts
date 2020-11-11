import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ITypePerson } from './type-person.interface';

@ObjectType()
export class TypePersonType implements ITypePerson {
  @Field() id: string;
  @Field() typePersonDescription: string;
  @Field() typePersonCode: string;
}