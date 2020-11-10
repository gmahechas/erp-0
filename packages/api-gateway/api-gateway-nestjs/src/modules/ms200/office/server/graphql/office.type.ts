import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeDepartmentType } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.type';
import { AddressType } from '@api-gateway-nestjs/modules/ms100/address/server/graphql/address.type';

@ObjectType()
export class OfficeType implements IOffice {
  @Field(() => ID) id: string;
  @Field() officeName: string;
  @Field() companyId: string;
  @Field() addressId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => AddressType) address: AddressType;
  @Field(() => [OfficeDepartmentType], { nullable: 'itemsAndList' }) officeDepartments: OfficeDepartmentType[];
}
