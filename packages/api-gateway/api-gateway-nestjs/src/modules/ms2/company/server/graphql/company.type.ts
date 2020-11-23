import { ObjectType, Field } from '@nestjs/graphql';

import { ICompany } from '@gmahechas/common-nestjs';
import { CityType } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.type';
import { OfficeType } from '@api-gateway-nestjs/modules/ms2/office/server/graphql/office.type';

@ObjectType()
export class CompanyType implements ICompany {
  @Field() id: string;
  @Field() companyName: string;
  @Field() companyIdentification: string;
  @Field() companyKey: string;
  @Field() cityId: string;
  @Field(() => CityType) city: CityType;
  @Field(() => [OfficeType], { nullable: 'itemsAndList' })
  offices: OfficeType[];
}
