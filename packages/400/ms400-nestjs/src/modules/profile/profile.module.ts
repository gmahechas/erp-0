import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms400/utils/database.modules';

import { ProfileGrpcController } from '@ms400/modules/profile/server/grpc/profile-grpc.controller';
import { ProfileMongodbService } from '@ms400/modules/profile/client/mongodb/profile-mongodb.service';
import { profileProviders } from '@ms400/modules/profile/client/mongodb/profile.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileGrpcController],
  providers: [
    ProfileMongodbService,
    ...profileProviders
  ]
})
export class ProfileModule { }
