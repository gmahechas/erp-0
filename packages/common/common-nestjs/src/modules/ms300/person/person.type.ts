import { ObjectType, Field, ID } from '@nestjs/graphql';

import { IPerson } from './person.interface';
import { CompanyType } from '../../ms200/company/company.type';
import { TypePersonType } from '../../ms300/type-person/type-person.type';
import { TypeIdentificationType } from '../../ms300/type-identification/type-identification.type';

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