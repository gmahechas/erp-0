import { InputType, Field, ID } from '@nestjs/graphql';

import { IAddress } from './address.interface';

@InputType()
export class AddressCreateInput implements Partial<IAddress> {
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() cityId: string;
}

@InputType()
export class AddressSearchInput implements Partial<IAddress> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class AddressUpdateInput implements Partial<IAddress> {
  @Field() id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class AddressDeleteInput implements Partial<IAddress> {
  @Field() id: string;
}