import { ObjectType, Field } from '@nestjs/graphql';

import { ICity } from './city.interface';
import { EstateType } from './../estate/estate.type';

@ObjectType()
export class CityType implements ICity {
  @Field() id: string;
  @Field() cityName: string;
  @Field() cityCode: string;
  @Field() estateId: string;
  @Field(() => EstateType) estate: EstateType;
}