import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeDepartmentType } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.type';

@ObjectType()
export class OfficeType implements IOffice {
  @Field() id: string;
  @Field() officeName: string;
  @Field() companyId: string;
  @Field() addressId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => [OfficeDepartmentType], { nullable: 'itemsAndList' }) officeDepartments: OfficeDepartmentType[];
}
