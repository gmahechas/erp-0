import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms400/utils/database.modules';

import { ProfileMenuGrpcController } from '@ms400/modules/profile-menu/server/grpc/profile-menu-grpc.controller';
import { ProfileMenuMongodbService } from '@ms400/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';
import { profileMenuProviders } from '@ms400/modules/profile-menu/client/mongodb/profile-menu.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileMenuGrpcController],
  providers: [
    ProfileMenuMongodbService,
    ...profileMenuProviders
  ]
})
export class ProfileMenuModule {}
