import { Module } from '@nestjs/common';

import { databasesModules } from '@auth/utils/database.modules';
import { AuthenticationModule } from '@auth/modules/authentication/authentication.module';

@Module({
  imports: [
    ...databasesModules,
    AuthenticationModule,
  ]
})
export class AppModule {}
