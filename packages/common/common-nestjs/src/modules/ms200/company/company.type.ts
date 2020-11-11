import { ObjectType, Field, ID } from '@nestjs/graphql';

import { ICompany } from './company.interface';
import { CityType } from '../../ms100/city/city.type';
import { AddressType } from '../../ms100/address/address.type';
import { OfficeType } from '../../ms200/office/office.type';
import { DepartmentType } from '../../ms200/department/department.type';

@ObjectType()
export class CompanyType implements ICompany {
  @Field() id: string;
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
