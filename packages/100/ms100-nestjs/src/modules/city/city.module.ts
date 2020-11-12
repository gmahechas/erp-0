import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CityDocument, citySchema } from '@gmahechas/common-nestjs';

import { CityGrpcController } from '@ms100/modules/city/server/grpc/city-grpc.controller';
import { CityMongodbService } from '@ms100/modules/city/client/mongodb/city-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'city',
        name: CityDocument.name,
        schema: citySchema
      }
    ])
  ],
  controllers: [CityGrpcController],
  providers: [CityMongodbService],
})
export class CityModule { }
