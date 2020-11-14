import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IOfficeDepartment } from '@gmahechas/common-nestjs';
import { OfficeType } from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.type';
import { DepartmentType } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.type';

@ObjectType()
export class OfficeDepartmentType implements IOfficeDepartment {
  @Field() id: string;
  @Field() officeDepartmentStatus: boolean;
  @Field() officeId: string;
  @Field() departmentId: string;
  @Field(() => OfficeType) office: OfficeType;
  @Field(() => DepartmentType) department: DepartmentType;
}