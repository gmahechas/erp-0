import { InputType, Field } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-nestjs';

@InputType()
export class OfficeCreateInput implements Partial<IOffice> {
  @Field() officeName: string;
  @Field() companyId: string;
}

@InputType()
export class OfficeSearchInput implements Partial<IOffice> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}

@InputType()
export class OfficeUpdateInput implements Partial<IOffice> {
  @Field() id: string;
  @Field({ nullable: true }) officeName: string;
  @Field({ nullable: true }) companyId: string;
}

@InputType()
export class OfficeDeleteInput implements Partial<IOffice> {
  @Field() id: string;
}
