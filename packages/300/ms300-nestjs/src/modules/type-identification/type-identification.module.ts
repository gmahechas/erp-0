import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TypeIdentificationDocument, typeIdentificationSchema } from '@gmahechas/common-nestjs';

import { TypeIdentificationGrpcController } from '@ms300/modules/type-identification/server/grpc/type-identification-grpc.controller';
import { TypeIdentificationMongodbService } from '@ms300/modules/type-identification/client/mongodb/type-identification-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'typeIdentification',
        name: TypeIdentificationDocument.name,
        schema: typeIdentificationSchema
      }
    ])
  ],
  controllers: [TypeIdentificationGrpcController],
  providers: [TypeIdentificationMongodbService]
})
export class TypeIdentificationModule { }
