import { InputType, Field } from '@nestjs/graphql';

import { ICountry } from './country.interface';

@InputType()
export class CountryCreateInput implements Partial<ICountry> {
  @Field() countryName: string;
  @Field() countryCode: string;
}

@InputType()
export class CountrySearchInput implements Partial<ICountry> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) countryName: string;
  @Field({ nullable: true }) countryCode: string;
}

@InputType()
export class CountryUpdateInput implements Partial<ICountry> {
  @Field() id: string;
  @Field({ nullable: true }) countryName: string;
  @Field({ nullable: true }) countryCode: string;
}

@InputType()
export class CountryDeleteInput implements Partial<ICountry> {
  @Field() id: string;
}