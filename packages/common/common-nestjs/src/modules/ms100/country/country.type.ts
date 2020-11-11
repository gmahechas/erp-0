import { ObjectType, Field } from '@nestjs/graphql';

import { ICountry } from './country.interface';
import { EstateType } from './../estate/estate.type';

@ObjectType()
export class CountryType implements ICountry {
  @Field() id: string;
  @Field() countryName: string;
  @Field() countryCode: string;
  @Field(() => [EstateType], { nullable: 'itemsAndList' }) estates: EstateType[];
}
