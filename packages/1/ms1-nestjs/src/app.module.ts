import { Module } from '@nestjs/common';

import { databasesModules } from '@ms1/utils/database.modules';
import { CountryModule } from '@ms1/modules/country/country.module';
import { EstateModule } from '@ms1/modules/estate/estate.module';
import { CityModule } from '@ms1/modules/city/city.module';
import { AddressModule } from '@ms1/modules/address/address.module';

@Module({
  imports: [
    ...databasesModules,
    CountryModule,
    EstateModule,
    CityModule,
    AddressModule,
  ],
})
export class AppModule {}
