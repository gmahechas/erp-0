import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { CityDocument, CitySchema } from '@ms100/modules/city/client/mongodb/city.schema';

import { CityGrpcController } from '@ms100/modules/city/server/grpc/city-grpc.controller';
import { CityMongodbService } from '@ms100/modules/city/client/mongodb/city-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'city',
        name: CityDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = CitySchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [CityGrpcController],
  providers: [CityMongodbService],
})
export class CityModule { }
