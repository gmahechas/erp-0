import { Module } from '@nestjs/common';

import { databasesModules } from '@ms300/utils/database.modules';
import { TypePersonModule } from '@ms300/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms300/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms300/modules/person/person.module';

@Module({
  imports: [
    ...databasesModules,
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ]
})
export class AppModule { }