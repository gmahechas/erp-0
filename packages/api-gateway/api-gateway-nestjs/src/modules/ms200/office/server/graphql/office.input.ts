import { InputType, Field, ID } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-nestjs';

@InputType()
export class OfficeCreateInput implements Partial<IOffice> {
  @Field() officeName: string;
  @Field() companyId: string;
  @Field() addressId: string;
}

@InputType()
export class OfficeSearchInput implements Partial<IOffice> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}

@InputType()
export class OfficeUpdateInput implements Partial<IOffice> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}

@InputType()
export class OfficeDeleteInput implements Partial<IOffice> {
  @Field(() => ID) id: string;
}