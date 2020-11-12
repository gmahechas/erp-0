import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms100/utils/database.modules';

import { CountryGrpcController } from '@ms100/modules/country/server/grpc/country-grpc.controller';
import { CountryMongodbService } from '@ms100/modules/country/client/mongodb/country-mongodb.service';
import { countryProviders } from '@ms100/modules/country/client/mongodb/country.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CountryGrpcController],
  providers: [
    CountryMongodbService,
    ...countryProviders
  ]
})
export class CountryModule { }
