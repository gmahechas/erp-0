import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileDocument, profileSchema } from '@gmahechas/common-nestjs';

import { ProfileGrpcController } from '@ms400/modules/profile/server/grpc/profile-grpc.controller';
import { ProfileMongodbService } from '@ms400/modules/profile/client/mongodb/profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'profile',
        name: ProfileDocument.name,
        schema: profileSchema
      }
    ])
  ],
  controllers: [ProfileGrpcController],
  providers: [ProfileMongodbService]
})
export class ProfileModule { }