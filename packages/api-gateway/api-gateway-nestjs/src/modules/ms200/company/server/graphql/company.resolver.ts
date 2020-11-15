import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { companyJoiSchema, IOffice, ICity } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service'
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';
import { CityType } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.type';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service';
import { OfficeType } from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.type';

import {
  CompanyCreateInput, CompanySearchInput,
  CompanyUpdateInput, CompanyDeleteInput
} from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.input';

@Resolver(() => CompanyType)
export class CompanyResolver extends BaseResolver(
    CompanyType,
    CompanyCreateInput, CompanySearchInput,
    CompanyUpdateInput, CompanyDeleteInput,
    'Company', companyJoiSchema
  ) implements OnModuleInit {

  private cityGrpcService: CityGrpcService;
  private officeGrpcService: OfficeGrpcService;

  constructor(
    private readonly companyGrpcService: CompanyGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(companyGrpcService); }

  onModuleInit(): void {
    this.cityGrpcService = this.moduleRef.get(CityGrpcService, { strict: false });
    this.officeGrpcService = this.moduleRef.get(OfficeGrpcService, { strict: false });
  }

  @ResolveField(() => CityType)
  city(@Parent() entity: CompanyType): Observable<Partial<ICity>> {
    return this.cityGrpcService.searchById({ entity: { id: entity.cityId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [OfficeType])
  offices(@Parent() entity: CompanyType): Observable<Partial<IOffice>[]> {
    return this.officeGrpcService.searchMany({ entities: [{ companyId: entity.id }] }).pipe(pluck('entities'));
  }

}
