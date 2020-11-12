import { Module } from '@nestjs/common';

import { databaseProviders } from '@ms100/utils/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }