import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CountryDocument, countrySchema } from '@gmahechas/common-nestjs';

import { CountryGrpcController } from '@ms1/modules/country/server/grpc/country-grpc.controller';
import { CountryMongodbService } from '@ms1/modules/country/client/mongodb/country-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'country',
        name: CountryDocument.name,
        schema: countrySchema
      }
    ])
  ],
  controllers: [CountryGrpcController],
  providers: [CountryMongodbService]
})
export class CountryModule { }