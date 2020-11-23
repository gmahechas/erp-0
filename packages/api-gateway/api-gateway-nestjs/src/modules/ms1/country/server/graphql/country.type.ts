import { ObjectType, Field } from '@nestjs/graphql';

import { ICountry } from '@gmahechas/common-nestjs';
import { EstateType } from '@api-gateway-nestjs/modules/ms1/estate/server/graphql/estate.type';

@ObjectType()
export class CountryType implements ICountry {
  @Field() id: string;
  @Field() countryName: string;
  @Field() countryCode: string;
  @Field(() => [EstateType], { nullable: 'itemsAndList' })
  estates: EstateType[];
}
