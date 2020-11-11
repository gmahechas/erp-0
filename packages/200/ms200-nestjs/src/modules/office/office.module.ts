import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { OfficeDocument, OfficeSchema } from '@gmahechas/common-nestjs';

import { OfficeGrpcController } from '@ms200/modules/office/server/grpc/office-grpc.controller';
import { OfficeMongodbService } from '@ms200/modules/office/client/mongodb/office-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'office',
        name: OfficeDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = OfficeSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [OfficeGrpcController],
  providers: [OfficeMongodbService]
})
export class OfficeModule {}
