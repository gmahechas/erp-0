import { ObjectType, Field } from '@nestjs/graphql';

import { IAddress } from '@gmahechas/common-nestjs';
import { CityType } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.type';

@ObjectType()
export class AddressType implements IAddress {
  @Field() id: string;
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() cityId: string;
  @Field(() => CityType) city: CityType;
}