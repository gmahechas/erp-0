import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EstateDocument, estateSchema } from '@gmahechas/common-nestjs';

import { EstateGrpcController } from '@ms100/modules/estate/server/grpc/estate-grpc.controller';
import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'estate',
        name: EstateDocument.name,
        schema: estateSchema
      }
    ])
  ],
  controllers: [EstateGrpcController],
  providers: [EstateMongodbService]
})
export class EstateModule { }