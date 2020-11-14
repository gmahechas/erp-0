import { Module } from '@nestjs/common';

import { databasesModules } from '@auth/utils/database.modules';
import { UserModule } from '@auth/modules/user/user.module';
import { UserProfileModule } from '@auth/modules/user-profile/user-profile.module';

@Module({
  imports: [
    ...databasesModules,
    UserModule,
    UserProfileModule
  ]
})
export class AppModule {}
