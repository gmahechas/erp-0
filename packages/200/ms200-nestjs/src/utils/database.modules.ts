import { Module } from '@nestjs/common';

import { databaseProviders } from '@ms200/utils/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule { }