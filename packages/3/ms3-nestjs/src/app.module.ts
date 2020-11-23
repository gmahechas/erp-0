import { Module } from '@nestjs/common';

import { databasesModules } from '@ms3/utils/database.modules';
import { TypePersonModule } from '@ms3/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms3/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms3/modules/person/person.module';

@Module({
  imports: [
    ...databasesModules,
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ],
})
export class AppModule {}
