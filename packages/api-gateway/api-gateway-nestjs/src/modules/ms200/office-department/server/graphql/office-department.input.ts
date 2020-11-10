import { InputType, Field, ID } from '@nestjs/graphql';

import { IOfficeDepartment } from '@gmahechas/common-nestjs';

@InputType()
export class OfficeDepartmentCreateInput implements Partial<IOfficeDepartment> {
  @Field() officeDepartmentStatus: boolean;
  @Field() officeId: string;
  @Field() departmentId: string;
}

@InputType()
export class OfficeDepartmentSearchInput implements Partial<IOfficeDepartment> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) officeDepartmentStatus: boolean;
  @Field({ nullable: true }) officeId: string;
  @Field({ nullable: true }) departmentId: string;
}

@InputType()
export class OfficeDepartmentUpdateInput implements Partial<IOfficeDepartment> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) officeDepartmentStatus: boolean;
  @Field({ nullable: true }) officeId: string;
  @Field({ nullable: true }) departmentId: string;
}

@InputType()
export class OfficeDepartmentDeleteInput implements Partial<IOfficeDepartment> {
  @Field(() => ID) id: string;
}