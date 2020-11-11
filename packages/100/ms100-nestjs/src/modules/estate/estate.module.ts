import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { EstateDocument, EstateSchema } from '@gmahechas/common-nestjs';

import { EstateGrpcController } from '@ms100/modules/estate/server/grpc/estate-grpc.controller';
import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'estate',
        name: EstateDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = EstateSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [EstateGrpcController],
  providers: [EstateMongodbService]
})
export class EstateModule { }
