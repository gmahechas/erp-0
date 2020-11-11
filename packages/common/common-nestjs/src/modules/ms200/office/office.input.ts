import { InputType, Field, ID } from '@nestjs/graphql';

import { IOffice } from './office.interface';

@InputType()
export class OfficeCreateInput implements Partial<IOffice> {
  @Field() officeName: string;
  @Field() companyId: string;
  @Field() addressId: string;
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