import { Module } from '@nestjs/common';

import { databasesModules } from '@ms200/utils/database.modules';
import { CompanyModule } from '@ms200/modules/company/company.module';
import { OfficeModule } from '@ms200/modules/office/office.module';

@Module({
  imports: [
    ...databasesModules,
    CompanyModule,
    OfficeModule
  ]
})
export class AppModule { }
