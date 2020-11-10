import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { MenuDocument, MenuSchema } from '@ms400/modules/menu/client/mongodb/menu.schema';

import { MenuGrpcController } from '@ms400/modules/menu/server/grpc/menu-grpc.controller';
import { MenuMongodbService } from '@ms400/modules/menu/client/mongodb/menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'menu',
        name: MenuDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = MenuSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [MenuGrpcController],
  providers: [MenuMongodbService]
})
export class MenuModule { }
