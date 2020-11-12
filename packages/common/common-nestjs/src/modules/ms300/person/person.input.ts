import { InputType, Field, ID } from '@nestjs/graphql';

import { IPerson } from './person.interface';

@InputType()
export class PersonCreateInput implements Partial<IPerson> {
  @Field() personIdentification: string;
  @Field() personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field() personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field() companyId: string;
  @Field() typePersonId: string;
  @Field() typeIdentificationId: string;
}

@InputType()
export class PersonSearchInput implements Partial<IPerson> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) personIdentification: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) companyId: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}

@InputType()
export class PersonUpdateInput implements Partial<IPerson> {
  @Field() id: string;
  @Field() personIdentification: string;
  @Field() personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field() personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}

@InputType()
export class PersonDeleteInput implements Partial<IPerson> {
  @Field() id: string;
}