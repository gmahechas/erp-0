import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms400/utils/database.modules';

import { UserGrpcController } from '@ms400/modules/user/server/grpc/user-grpc.controller';
import { UserMongodbService } from '@ms400/modules/user/client/mongodb/user-mongodb.service';
import { userProviders } from '@ms400/modules/user/client/mongodb/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserGrpcController],
  providers: [
    UserMongodbService,
    ...userProviders
  ]
})
export class UserModule {}
