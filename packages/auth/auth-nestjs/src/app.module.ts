import { Module } from '@nestjs/common';

import { databasesModules } from '@auth/utils/database.modules';
import { UserModule } from '@auth/modules/user/user.module';
import { AuthModule } from '@auth/modules/auth/auth.module';

@Module({
  imports: [...databasesModules, UserModule, AuthModule],
})
export class AppModule {}
