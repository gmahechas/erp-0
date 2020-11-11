import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { UserDocument, UserSchema } from '@gmahechas/common-nestjs';

import { UserGrpcController } from '@ms400/modules/user/server/grpc/user-grpc.controller';
import { UserMongodbService } from '@ms400/modules/user/client/mongodb/user-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'user',
        name: UserDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = UserSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [UserGrpcController],
  providers: [UserMongodbService]
})
export class UserModule {}
