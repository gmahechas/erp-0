import { Module } from '@nestjs/common';

import { databasesModules } from '@ms400/utils/database.modules';
import { MenuModule } from '@ms400/modules/menu/menu.module';
import { ProfileModule } from '@ms400/modules/profile/profile.module';
import { ProfileMenuModule } from '@ms400/modules/profile-menu/profile-menu.module';

@Module({
  imports: [
    ...databasesModules,
    MenuModule,
    ProfileModule,
    ProfileMenuModule
  ]
})
export class AppModule { }
