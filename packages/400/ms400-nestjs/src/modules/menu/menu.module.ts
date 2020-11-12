import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms400/utils/database.modules';

import { MenuGrpcController } from '@ms400/modules/menu/server/grpc/menu-grpc.controller';
import { MenuMongodbService } from '@ms400/modules/menu/client/mongodb/menu-mongodb.service';
import { menuProviders } from '@ms400/modules/menu/client/mongodb/menu.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuGrpcController],
  providers: [
    MenuMongodbService,
    ...menuProviders
  ]
})
export class MenuModule { }
