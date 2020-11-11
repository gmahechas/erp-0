import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { UserProfileDocument, UserProfileSchema } from '@gmahechas/common-nestjs';

import { UserProfileGrpcController } from '@ms400/modules/user-profile/server/grpc/user-profile-grpc.controller';
import { UserProfileMongodbService } from '@ms400/modules/user-profile/client/mongodb/user-profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'userProfile',
        name: UserProfileDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = UserProfileSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [UserProfileGrpcController],
  providers: [UserProfileMongodbService]
})
export class UserProfileModule {}
