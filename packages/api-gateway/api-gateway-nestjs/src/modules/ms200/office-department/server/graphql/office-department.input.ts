import { InputType, Field } from '@nestjs/graphql';

import { IOfficeDepartment } from '@gmahechas/common-nestjs';

@InputType()
export class OfficeDepartmentCreateInput implements Partial<IOfficeDepartment> {
  @Field() officeDepartmentStatus: boolean;
  @Field() officeId: string;
  @Field() departmentId: string;
}

@InputType()
export class OfficeDepartmentSearchInput implements Partial<IOfficeDepartment> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) officeDepartmentStatus: boolean;
  @Field({ nullable: true }) officeId: string;
  @Field({ nullable: true }) departmentId: string;
}

@InputType()
export class OfficeDepartmentUpdateInput implements Partial<IOfficeDepartment> {
  @Field() id: string;
  @Field({ nullable: true }) officeDepartmentStatus: boolean;
  @Field({ nullable: true }) officeId: string;
  @Field({ nullable: true }) departmentId: string;
}

@InputType()
export class OfficeDepartmentDeleteInput implements Partial<IOfficeDepartment> {
  @Field() id: string;
}