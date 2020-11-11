import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { TypeIdentificationDocument, TypeIdentificationSchema } from '@gmahechas/common-nestjs';

import { TypeIdentificationGrpcController } from '@ms300/modules/type-identification/server/grpc/type-identification-grpc.controller';
import { TypeIdentificationMongodbService } from '@ms300/modules/type-identification/client/mongodb/type-identification-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'typeIdentification',
        name: TypeIdentificationDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = TypeIdentificationSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [TypeIdentificationGrpcController],
  providers: [TypeIdentificationMongodbService]
})
export class TypeIdentificationModule {}
