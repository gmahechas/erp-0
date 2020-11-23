import { Module } from '@nestjs/common';

import { databasesModules } from '@ms2/utils/database.modules';
import { CompanyModule } from '@ms2/modules/company/company.module';
import { OfficeModule } from '@ms2/modules/office/office.module';

@Module({
  imports: [...databasesModules, CompanyModule, OfficeModule],
})
export class AppModule {}
