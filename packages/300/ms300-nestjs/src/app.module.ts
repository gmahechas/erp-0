import { Module } from '@nestjs/common';

import { TypePersonModule } from '@ms300/modules/type-person/type-person.module';
import { TypeIdentificationModule } from '@ms300/modules/type-identification/type-identification.module';
import { PersonModule } from '@ms300/modules/person/person.module';

@Module({
  imports: [
    TypePersonModule,
    TypeIdentificationModule,
    PersonModule,
  ]
})
export class AppModule {}
