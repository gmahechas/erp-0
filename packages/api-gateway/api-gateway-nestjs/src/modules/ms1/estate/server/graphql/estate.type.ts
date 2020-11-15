import { ObjectType, Field } from '@nestjs/graphql';

import { IEstate } from '@gmahechas/common-nestjs';
import { CountryType } from '@api-gateway-nestjs/modules/ms1/country/server/graphql/country.type';
import { CityType } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.type';

@ObjectType()
export class EstateType implements IEstate {
  @Field() id: string;
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
  @Field(() => CountryType) country: CountryType;
  @Field(() => [CityType], { nullable: 'itemsAndList' }) cities: CityType[];
}