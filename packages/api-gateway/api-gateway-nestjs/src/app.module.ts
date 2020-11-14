import { Module } from '@nestjs/common';

import { GraphqlModule } from '@api-gateway-nestjs/graphql.module';
import { CountryModule } from '@api-gateway-nestjs/modules/ms100/country/country.module'; /* ms100 */
import { EstateModule } from '@api-gateway-nestjs/modules/ms100/estate/estate.module';
import { CityModule } from '@api-gateway-nestjs/modules/ms100/city/city.module';
import { AddressModule } from '@api-gateway-nestjs/modules/ms100/address/address.module';
import { CompanyModule } from '@api-gateway-nestjs/modules/ms200/company/company.module'; /* ms200 */
import { OfficeModule } from '@api-gateway-nestjs/modules/ms200/office/office.module';
import { DepartmentModule } from '@api-gateway-nestjs/modules/ms200/department/department.module';
import { OfficeDepartmentModule } from '@api-gateway-nestjs/modules/ms200/office-department/office-department.module';
import { TypePersonModule } from '@api-gateway-nestjs/modules/ms300/type-person/type-person.module'; /* ms300 */
import { TypeIdentificationModule } from '@api-gateway-nestjs/modules/ms300/type-identification/type-identification.module';
import { PersonModule } from '@api-gateway-nestjs/modules/ms300/person/person.module';
import { MenuModule } from '@api-gateway-nestjs/modules/ms400/menu/menu.module'; /* ms400 */
import { ProfileModule } from '@api-gateway-nestjs/modules/ms400/profile/profile.module';
import { ProfileMenuModule } from '@api-gateway-nestjs/modules/ms400/profile-menu/profile-menu.module';
import { UserModule } from '@api-gateway-nestjs/modules/auth/user/user.module';
import { UserProfileModule } from '@api-gateway-nestjs/modules/auth/user-profile/user-profile.module';

@Module({
  imports: [
    UserModule, /* auth */
    UserProfileModule,
    GraphqlModule,
    CountryModule, /* ms100 */
    EstateModule,
    CityModule,
    AddressModule,
    CompanyModule, /* ms200 */
    OfficeModule,
    DepartmentModule,
    OfficeDepartmentModule,
    TypePersonModule, /* ms300 */
    TypeIdentificationModule,
    PersonModule,
    MenuModule, /* ms400 */
    ProfileModule,
    ProfileMenuModule
  ]
})
export class AppModule { }
