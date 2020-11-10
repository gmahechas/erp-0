import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { ProfileMenuDocument, ProfileMenuSchema } from '@ms400/modules/profile-menu/client/mongodb/profile-menu.schema';

import { ProfileMenuGrpcController } from '@ms400/modules/profile-menu/server/grpc/profile-menu-grpc.controller';
import { ProfileMenuMongodbService } from '@ms400/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'profileMenu',
        name: ProfileMenuDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = ProfileMenuSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [ProfileMenuGrpcController],
  providers: [ProfileMenuMongodbService]
})
export class ProfileMenuModule {}
