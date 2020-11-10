import { InputType, Field, ID } from '@nestjs/graphql';

import { ICompany } from '@gmahechas/common-nestjs';

@InputType()
export class CompanyCreateInput implements Partial<ICompany> {
  @Field() companyName: string;
  @Field() companyIdentification: string;
  @Field() companyKey: string;
  @Field() cityId: string;
  @Field() addressId: string;
}

@InputType()
export class CompanySearchInput implements Partial<ICompany> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) companyName: string;
  @Field({ nullable: true }) companyIdentification: string;
  @Field({ nullable: true }) companyKey: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class CompanyUpdateInput implements Partial<ICompany> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) companyName: string;
  @Field({ nullable: true }) companyIdentification: string;
  @Field({ nullable: true }) companyKey: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class CompanyDeleteInput implements Partial<ICompany> {
  @Field(() => ID) id: string;
}