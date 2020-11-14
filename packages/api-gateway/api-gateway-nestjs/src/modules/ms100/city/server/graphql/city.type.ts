import { ObjectType, Field } from '@nestjs/graphql';

import { ICity } from '@gmahechas/common-nestjs';
import { EstateType } from '@api-gateway-nestjs/modules/ms100/estate/server/graphql/estate.type';

@ObjectType()
export class CityType implements ICity {
  @Field() id: string;
  @Field() cityName: string;
  @Field() cityCode: string;
  @Field() estateId: string;
  @Field(() => EstateType) estate: EstateType;
}