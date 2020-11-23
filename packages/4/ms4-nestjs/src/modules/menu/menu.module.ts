import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MenuDocument, menuSchema } from '@gmahechas/common-nestjs';

import { MenuGrpcController } from '@ms4/modules/menu/server/grpc/menu-grpc.controller';
import { MenuMongodbService } from '@ms4/modules/menu/client/mongodb/menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'menu',
        name: MenuDocument.name,
        schema: menuSchema,
      },
    ]),
  ],
  controllers: [MenuGrpcController],
  providers: [MenuMongodbService],
})
export class MenuModule {}
