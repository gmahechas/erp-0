import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ICompany } from '@gmahechas/common-nestjs';
import { OfficeType } from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.type';
import { DepartmentType } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.type';
import { CityType } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.type';
import { AddressType } from '@api-gateway-nestjs/modules/ms100/address/server/graphql/address.type';

@ObjectType()
export class CompanyType implements ICompany {
  @Field(() => ID) id: string;
  @Field() companyName: string;
  @Field() companyIdentification: string;
  @Field() companyKey: string;
  @Field() cityId: string;
  @Field() addressId: string;
  @Field(() => CityType) city: CityType;
  @Field(() => AddressType) address: AddressType;
  @Field(() => [OfficeType], { nullable: 'itemsAndList' }) offices: OfficeType[];
  @Field(() => [DepartmentType], { nullable: 'itemsAndList' }) departments: DepartmentType[];
}
