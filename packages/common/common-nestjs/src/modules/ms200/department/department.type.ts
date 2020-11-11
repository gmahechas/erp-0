import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IDepartment } from './department.interface';
import { CompanyType } from '../company/company.type';
import { OfficeDepartmentType } from '../office-department/office-department.type';

@ObjectType()
export class DepartmentType implements IDepartment {
  @Field() id: string;
  @Field() departmentName: string;
  @Field() companyId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => [OfficeDepartmentType], { nullable: 'itemsAndList' }) officesDepartment: OfficeDepartmentType[];
}