import { Module } from '@nestjs/common';

import { CountryModule } from '@ms100/modules/country/country.module';
import { EstateModule } from '@ms100/modules/estate/estate.module';
import { CityModule } from '@ms100/modules/city/city.module';
import { AddressModule } from '@ms100/modules/address/address.module';

@Module({
  imports: [
    CountryModule,
    EstateModule,
    CityModule,
    AddressModule
  ]
})
export class AppModule { }
