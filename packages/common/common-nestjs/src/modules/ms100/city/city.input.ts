import { InputType, Field, ID } from '@nestjs/graphql';

import { ICity } from './city.interface';

@InputType()
export class CityCreateInput implements Partial<ICity> {
  @Field() cityName: string;
  @Field() cityCode: string;
  @Field() estateId: string;
}

@InputType()
export class CitySearchInput implements Partial<ICity> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) cityName: string;
  @Field({ nullable: true }) cityCode: string;
  @Field({ nullable: true }) estateId: string;
}

@InputType()
export class CityUpdateInput implements Partial<ICity> {
  @Field() id: string;
  @Field({ nullable: true }) cityName: string;
  @Field({ nullable: true }) cityCode: string;
  @Field({ nullable: true }) estateId: string;
}

@InputType()
export class CityDeleteInput implements Partial<ICity> {
  @Field() id: string;
}