import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserProfileDocument, userProfileSchema } from '@gmahechas/common-nestjs';

import { UserProfileGrpcController } from '@auth/modules/user-profile/server/grpc/user-profile-grpc.controller';
import { UserProfileMongodbService } from '@auth/modules/user-profile/client/mongodb/user-profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'userProfile',
        name: UserProfileDocument.name,
        schema: userProfileSchema
      }
    ])
  ],
  controllers: [UserProfileGrpcController],
  providers: [UserProfileMongodbService]
})
export class UserProfileModule { }
