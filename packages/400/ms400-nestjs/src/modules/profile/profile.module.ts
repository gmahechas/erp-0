import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { ProfileDocument, ProfileSchema } from '@ms400/modules/profile/client/mongodb/profile.schema';

import { ProfileGrpcController } from '@ms400/modules/profile/server/grpc/profile-grpc.controller';
import { ProfileMongodbService } from '@ms400/modules/profile/client/mongodb/profile-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'profile',
        name: ProfileDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = ProfileSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [ProfileGrpcController],
  providers: [ProfileMongodbService]
})
export class ProfileModule { }
