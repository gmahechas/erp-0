import { ObjectType, Field } from '@nestjs/graphql';

import { IEstate } from './estate.interface';
import { CountryType } from '../country/country.type';
import { CityType } from './../city/city.type';

@ObjectType()
export class EstateType implements IEstate {
  @Field() id: string;
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
  @Field(() => CountryType) country: CountryType;
  @Field(() => [CityType], { nullable: 'itemsAndList' }) cities: CityType[];
}