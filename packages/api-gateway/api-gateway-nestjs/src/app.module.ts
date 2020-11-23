import { Module } from '@nestjs/common';

import { GraphqlModule } from '@api-gateway-nestjs/graphql.module';
import { UserModule } from '@api-gateway-nestjs/modules/auth/user/user.module';
import { CountryModule } from '@api-gateway-nestjs/modules/ms1/country/country.module'; /* ms100 */
import { EstateModule } from '@api-gateway-nestjs/modules/ms1/estate/estate.module';
import { CityModule } from '@api-gateway-nestjs/modules/ms1/city/city.module';
import { AddressModule } from '@api-gateway-nestjs/modules/ms1/address/address.module';
import { CompanyModule } from '@api-gateway-nestjs/modules/ms2/company/company.module'; /* ms200 */
import { OfficeModule } from '@api-gateway-nestjs/modules/ms2/office/office.module';
import { TypePersonModule } from '@api-gateway-nestjs/modules/ms3/type-person/type-person.module'; /* ms300 */
import { TypeIdentificationModule } from '@api-gateway-nestjs/modules/ms3/type-identification/type-identification.module';
import { PersonModule } from '@api-gateway-nestjs/modules/ms3/person/person.module';
import { MenuModule } from '@api-gateway-nestjs/modules/ms4/menu/menu.module'; /* ms400 */
import { ProfileModule } from '@api-gateway-nestjs/modules/ms4/profile/profile.module';
import { ProfileMenuModule } from '@api-gateway-nestjs/modules/ms4/profile-menu/profile-menu.module';
import { UserProfileModule } from '@api-gateway-nestjs/modules/ms4/user-profile/user-profile.module';
import { AuthModule } from './modules/auth/auth/auth.module';

@Module({
  imports: [
    GraphqlModule,
    UserModule /* auth */,
    CountryModule /* ms100 */,
    EstateModule,
    CityModule,
    AddressModule,
    CompanyModule /* ms200 */,
    OfficeModule,
    TypePersonModule /* ms300 */,
    TypeIdentificationModule,
    PersonModule,
    MenuModule /* ms400 */,
    ProfileModule,
    ProfileMenuModule,
    UserProfileModule,
    AuthModule,
  ],
})
export class AppModule {}
