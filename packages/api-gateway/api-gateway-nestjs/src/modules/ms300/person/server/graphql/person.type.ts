import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IPerson } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { TypePersonType } from '@api-gateway-nestjs/modules/ms300/type-person/server/graphql/type-person.type';
import { TypeIdentificationType } from '@api-gateway-nestjs/modules/ms300/type-identification/server/graphql/type-identification.type';

@ObjectType()
export class PersonType implements IPerson {
  @Field(() => ID) id: string;
  @Field() personFirstName: string;
  @Field() personSecondName: string;
  @Field() personFirstSurname: string;
  @Field() personSecondSurname: string;
  @Field() personCompanyName: string;
  @Field() companyId: string;
  @Field() typePersonId: string;
  @Field() typeIdentificationId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => TypePersonType) typePerson: TypePersonType;
  @Field(() => TypeIdentificationType) typeIdentification: TypeIdentificationType;
}