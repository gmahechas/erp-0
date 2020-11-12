import { Module } from '@nestjs/common';

import { CompanyModule } from '@ms200/modules/company/company.module';
import { OfficeModule } from '@ms200/modules/office/office.module';
import { DepartmentModule } from '@ms200/modules/department/department.module';
import { OfficeDepartmentModule } from '@ms200/modules/office-department/office-department.module';

@Module({
  imports: [
    CompanyModule,
    OfficeModule,
    DepartmentModule,
    OfficeDepartmentModule
  ]
})
export class AppModule { }
