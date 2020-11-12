import { ObjectType, Field } from '@nestjs/graphql';

import { IAddress } from './address.interface';
import { CityType } from './../city/city.type';

@ObjectType()
export class AddressType implements IAddress {
  @Field() id: string;
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() cityId: string;
  @Field(() => CityType) city: CityType;
}