import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms400/utils/database.modules';

import { UserProfileGrpcController } from '@ms400/modules/user-profile/server/grpc/user-profile-grpc.controller';
import { UserProfileMongodbService } from '@ms400/modules/user-profile/client/mongodb/user-profile-mongodb.service';
import { userProfileProviders } from '@ms400/modules/user-profile/client/mongodb/user-profile.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserProfileGrpcController],
  providers: [
    UserProfileMongodbService,
    ...userProfileProviders
  ]
})
export class UserProfileModule {}
