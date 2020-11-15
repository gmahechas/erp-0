import { ObjectType, Field } from '@nestjs/graphql';

import { IOffice } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.type';

@ObjectType()
export class OfficeType implements IOffice {
  @Field() id: string;
  @Field() officeName: string;
  @Field() companyId: string;
  @Field(() => CompanyType) company: CompanyType;
}
