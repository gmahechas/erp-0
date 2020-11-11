import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IOfficeDepartment } from './office-department.interface';
import { OfficeType } from '../office/office.type';
import { DepartmentType } from '../department/department.type';

@ObjectType()
export class OfficeDepartmentType implements IOfficeDepartment {
  @Field() id: string;
  @Field() officeDepartmentStatus: boolean;
  @Field() officeId: string;
  @Field() departmentId: string;
  @Field(() => OfficeType) office: OfficeType;
  @Field(() => DepartmentType) department: DepartmentType;
}