import { Module } from '@nestjs/common';

import { databasesModules } from '@auth/utils/database.modules';

@Module({
  imports: [
    ...databasesModules
  ]
})
export class AppModule {}
