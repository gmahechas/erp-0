import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IAddress } from '@gmahechas/common-nestjs';
import { CityType } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.type';

@ObjectType()
export class AddressType implements IAddress {
  @Field(() => ID) id: string;
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() addressFullName: string;
  @Field() addressPhone: string;
  @Field() cityId: string;
  @Field(() => CityType) city: CityType;
}