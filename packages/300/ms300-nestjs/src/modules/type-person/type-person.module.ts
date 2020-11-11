import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { TypePersonDocument, TypePersonSchema } from '@gmahechas/common-nestjs';

import { TypePersonGrpcController } from '@ms300/modules/type-person/server/grpc/type-person-grpc.controller';
import { TypePersonMongodbService } from '@ms300/modules/type-person/client/mongodb/type-person-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'typePerson',
        name: TypePersonDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = TypePersonSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [TypePersonGrpcController],
  providers: [TypePersonMongodbService]
})
export class TypePersonModule {}
