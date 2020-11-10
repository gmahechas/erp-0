import { InputType, Field, ID } from '@nestjs/graphql';

import { IPerson } from '@gmahechas/common-nestjs';

@InputType()
export class PersonCreateInput implements Partial<IPerson> {
  @Field() personFirstName: string;
  @Field() personSecondName: string;
  @Field() personFirstSurname: string;
  @Field() personSecondSurname: string;
  @Field() personCompanyName: string;
  @Field() companyId: string;
  @Field() typePersonId: string;
  @Field() typeIdentificationId: string;
}

@InputType()
export class PersonSearchInput implements Partial<IPerson> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) companyId: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}

@InputType()
export class PersonUpdateInput implements Partial<IPerson> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field({ nullable: true }) companyId: string;
  @Field({ nullable: true }) typePersonId: string;
  @Field({ nullable: true }) typeIdentificationId: string;
}

@InputType()
export class PersonDeleteInput implements Partial<IPerson> {
  @Field(() => ID) id: string;
}