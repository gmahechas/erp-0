import { InputType, Field, ID } from '@nestjs/graphql';

import { IAddress } from '@gmahechas/common-nestjs';

@InputType()
export class AddressCreateInput implements Partial<IAddress> {
  @Field() addressLine1: string;
  @Field() addressLine2: string;
  @Field() addressZipCode: string;
  @Field() addressFullName: string;
  @Field() addressPhone: string;
  @Field() cityId: string;
}

@InputType()
export class AddressSearchInput implements Partial<IAddress> {
  @Field(() => ID, { nullable: true }) id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) addressFullName: string;
  @Field({ nullable: true }) addressPhone: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class AddressUpdateInput implements Partial<IAddress> {
  @Field(() => ID) id: string;
  @Field({ nullable: true }) addressLine1: string;
  @Field({ nullable: true }) addressLine2: string;
  @Field({ nullable: true }) addressZipCode: string;
  @Field({ nullable: true }) addressFullName: string;
  @Field({ nullable: true }) addressPhone: string;
  @Field({ nullable: true }) cityId: string;
}

@InputType()
export class AddressDeleteInput implements Partial<IAddress> {
  @Field(() => ID) id: string;
}