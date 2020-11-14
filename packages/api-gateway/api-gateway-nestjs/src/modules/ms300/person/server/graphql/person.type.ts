import { ObjectType, Field } from '@nestjs/graphql';

import { IPerson } from '@gmahechas/common-nestjs';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { TypePersonType } from '@api-gateway-nestjs/modules/ms300/type-person/server/graphql/type-person.type';
import { TypeIdentificationType } from '@api-gateway-nestjs/modules/ms300/type-identification/server/graphql/type-identification.type';

@ObjectType()
export class PersonType implements IPerson {
  @Field() id: string;
  @Field() personIdentification: string;
  @Field({ nullable: true }) personFirstName: string;
  @Field({ nullable: true }) personSecondName: string;
  @Field({ nullable: true }) personFirstSurname: string;
  @Field({ nullable: true }) personSecondSurname: string;
  @Field({ nullable: true }) personCompanyName: string;
  @Field() companyId: string;
  @Field() typePersonId: string;
  @Field() typeIdentificationId: string;
  @Field(() => CompanyType) company: CompanyType;
  @Field(() => TypePersonType) typePerson: TypePersonType;
  @Field(() => TypeIdentificationType) typeIdentification: TypeIdentificationType;
}