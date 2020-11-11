import { InputType, Field, ID } from '@nestjs/graphql';

import { ITypePerson } from './type-person.interface';

@InputType()
export class TypePersonCreateInput implements Partial<ITypePerson> {
  @Field() typePersonDescription: string;
  @Field() typePersonCode: string;
}

@InputType()
export class TypePersonSearchInput implements Partial<ITypePerson> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) typePersonDescription: string;
  @Field({ nullable: true }) typePersonCode: string;
}

@InputType()
export class TypePersonUpdateInput implements Partial<ITypePerson> {
  @Field() id: string;
  @Field({ nullable: true }) typePersonDescription: string;
  @Field({ nullable: true }) typePersonCode: string;
}

@InputType()
export class TypePersonDeleteInput implements Partial<ITypePerson> {
  @Field() id: string;
}