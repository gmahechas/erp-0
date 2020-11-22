import { Module } from '@nestjs/common';

import { databasesModules } from '@auth/utils/database.modules';
import { UserModule } from '@auth/modules/user/user.module';

@Module({
  imports: [...databasesModules, UserModule],
})
export class AppModule {}
