import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { CountryDocument, CountrySchema } from '@gmahechas/common-nestjs';

import { CountryGrpcController } from '@ms100/modules/country/server/grpc/country-grpc.controller';
import { CountryMongodbService } from '@ms100/modules/country/client/mongodb/country-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'country',
        name: CountryDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = CountrySchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [CountryGrpcController],
  providers: [CountryMongodbService]
})
export class CountryModule { }
