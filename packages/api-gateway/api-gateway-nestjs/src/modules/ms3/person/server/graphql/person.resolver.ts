import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { personJoiSchema, ICompany, ITypePerson, ITypeIdentification } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms3/person/client/grpc/person-grpc.service';
import { PersonType } from '@api-gateway-nestjs/modules/ms3/person/server/graphql/person.type';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms2/company/client/grpc/company-grpc.service';
import { CompanyType } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.type';
import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms3/type-person/client/grpc/type-person-grpc.service';
import { TypePersonType } from '@api-gateway-nestjs/modules/ms3/type-person/server/graphql/type-person.type';
import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms3/type-identification/client/grpc/type-identification-grpc.service';
import { TypeIdentificationType } from '@api-gateway-nestjs/modules/ms3/type-identification/server/graphql/type-identification.type';

import {
  PersonCreateInput, PersonSearchInput,
  PersonUpdateInput, PersonDeleteInput
} from '@api-gateway-nestjs/modules/ms3/person/server/graphql/person.input';

@Resolver(() => PersonType)
export class PersonResolver extends BaseResolver(
    PersonType,
    PersonCreateInput, PersonSearchInput,
    PersonUpdateInput, PersonDeleteInput,
    'Person', personJoiSchema
  ) implements OnModuleInit {

  private companyGrpcService: CompanyGrpcService;
  private typePersonGrpcService: TypePersonGrpcService;
  private typeIdentificationGrpcService: TypeIdentificationGrpcService;

  constructor(
    private readonly personGrpcService: PersonGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(personGrpcService); }

  onModuleInit(): void {
    this.companyGrpcService = this.moduleRef.get(CompanyGrpcService, { strict: false });
    this.typePersonGrpcService = this.moduleRef.get(TypePersonGrpcService, { strict: false });
    this.typeIdentificationGrpcService = this.moduleRef.get(TypeIdentificationGrpcService, { strict: false });
  }

  @ResolveField(() => CompanyType)
  company(@Parent() entity: PersonType): Observable<Partial<ICompany>> {
    return this.companyGrpcService.searchById({ entity: { id: entity.companyId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => TypePersonType)
  typePerson(@Parent() entity: PersonType): Observable<Partial<ITypePerson>> {
    return this.typePersonGrpcService.searchById({ entity: { id: entity.typePersonId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => TypeIdentificationType)
  typeIdentification(@Parent() entity: PersonType): Observable<Partial<ITypeIdentification>> {
    return this.typeIdentificationGrpcService.searchById({ entity: { id: entity.typeIdentificationId } }).pipe(pluck('entity'));
  }

}
