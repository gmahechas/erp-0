import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IOffice } from './office.interface';
import { AddressType } from '../../ms100/address/address.type';
import { CompanyType } from '../company/company.type';
import { OfficeDepartmentType } from '../office-department/office-department.type';

@ObjectType()
export class OfficeType implements IOffice {
  @Field() id: string;
  @Field() officeName: string;
  @Field() companyId: string;
  @Field() addressId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => AddressType) address: AddressType;
  @Field(() => [OfficeDepartmentType], { nullable: 'itemsAndList' }) officeDepartments: OfficeDepartmentType[];
}
