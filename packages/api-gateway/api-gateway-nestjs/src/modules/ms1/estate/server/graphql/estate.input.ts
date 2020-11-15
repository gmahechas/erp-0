import { InputType, Field } from '@nestjs/graphql';

import { IEstate } from '@gmahechas/common-nestjs';

@InputType()
export class EstateCreateInput implements Partial<IEstate> {
  @Field() estateName: string;
  @Field() estateCode: string;
  @Field() countryId: string;
}

@InputType()
export class EstateSearchInput implements Partial<IEstate> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) estateName: string;
  @Field({ nullable: true }) estateCode: string;
  @Field({ nullable: true }) countryId: string;
}

@InputType()
export class EstateUpdateInput implements Partial<IEstate> {
  @Field() id: string;
  @Field({ nullable: true }) estateName: string;
  @Field({ nullable: true }) estateCode: string;
  @Field({ nullable: true }) countryId: string;
}

@InputType()
export class EstateDeleteInput implements Partial<IEstate> {
  @Field() id: string;
}