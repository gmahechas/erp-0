import { Module } from '@nestjs/common';

import { databasesModules } from '@ms100/utils/database.modules';
import { CountryModule } from '@ms100/modules/country/country.module';
import { EstateModule } from '@ms100/modules/estate/estate.module';
import { CityModule } from '@ms100/modules/city/city.module';
import { AddressModule } from '@ms100/modules/address/address.module';

@Module({
  imports: [
    ...databasesModules,
    CountryModule,
    EstateModule,
    CityModule,
    AddressModule
  ]
})
export class AppModule { }
