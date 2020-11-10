import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IEstate } from '@gmahechas/common-nestjs';
import { CountryType } from '@api-gateway-nestjs/modules/ms100/country/server/graphql/country.type';
import { CityType } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.type';

@ObjectType()
export class EstateType implements IEstate {
  @Field(() => ID) id: string;
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
  @Field(() => CountryType) country: CountryType;
  @Field(() => [CityType], { nullable: 'itemsAndList' }) cities: CityType[];
}