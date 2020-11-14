import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileMenuDocument, profileMenuSchema } from '@gmahechas/common-nestjs';

import { ProfileMenuGrpcController } from '@ms400/modules/profile-menu/server/grpc/profile-menu-grpc.controller';
import { ProfileMenuMongodbService } from '@ms400/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'profileMenu',
        name: ProfileMenuDocument.name,
        schema: profileMenuSchema
      }
    ])
  ],
  controllers: [ProfileMenuGrpcController],
  providers: [ProfileMenuMongodbService]
})
export class ProfileMenuModule { }
