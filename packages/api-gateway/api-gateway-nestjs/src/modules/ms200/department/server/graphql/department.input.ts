import { InputType, Field } from '@nestjs/graphql';

import { IDepartment } from '@gmahechas/common-nestjs';

@InputType()
export class DepartmentCreateInput implements Partial<IDepartment> {
  @Field() departmentName: string;
  @Field() companyId: string;
}

@InputType()
export class DepartmentSearchInput implements Partial<IDepartment> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) departmentName: string;
}

@InputType()
export class DepartmentUpdateInput implements Partial<IDepartment> {
  @Field() id: string;
  @Field({ nullable: true }) departmentName: string;
}

@InputType()
export class DepartmentDeleteInput implements Partial<IDepartment> {
  @Field() id: string;
}