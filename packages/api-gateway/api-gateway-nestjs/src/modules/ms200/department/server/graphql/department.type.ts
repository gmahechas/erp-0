import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IDepartment } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeDepartmentType } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.type';

@ObjectType()
export class DepartmentType implements IDepartment {
  @Field() id: string;
  @Field() departmentName: string;
  @Field() companyId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => [OfficeDepartmentType], { nullable: 'itemsAndList' }) officesDepartment: OfficeDepartmentType[];
}