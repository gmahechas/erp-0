import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  CompanyType, OfficeType, DepartmentType, CityType,
  companyJoiSchema, IOffice, IDepartment, ICity, BaseResolver,
  CompanyCreateInput, CompanySearchInput,
  CompanyUpdateInput, CompanyDeleteInput
} from '@gmahechas/common-nestjs';

import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service'
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';

@Resolver(() => CompanyType)
export class CompanyResolver extends BaseResolver(
    CompanyType,
    CompanyCreateInput, CompanySearchInput,
    CompanyUpdateInput, CompanyDeleteInput,
    'Company', companyJoiSchema
  ) implements OnModuleInit {

  private cityGrpcService: CityGrpcService;
  private officeGrpcService: OfficeGrpcService;
  private departmentGrpcService: DepartmentGrpcService;

  constructor(
    private readonly companyGrpcService: CompanyGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(companyGrpcService); }

  onModuleInit(): void {
    this.cityGrpcService = this.moduleRef.get(CityGrpcService, { strict: false });
    this.officeGrpcService = this.moduleRef.get(OfficeGrpcService, { strict: false });
    this.departmentGrpcService = this.moduleRef.get(DepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => CityType)
  city(@Parent() entity: CompanyType): Observable<Partial<ICity>> {
    return this.cityGrpcService.searchById({ entity: { id: entity.cityId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [OfficeType])
  offices(@Parent() entity: CompanyType): Observable<Partial<IOffice>[]> {
    return this.officeGrpcService.searchMany({ entities: [{ companyId: entity.id }] }).pipe(pluck('entities'));
  }

  @ResolveField(() => [DepartmentType])
  departments(@Parent() entity: CompanyType): Observable<Partial<IDepartment>[]> {
    return this.departmentGrpcService.searchMany({ entities: [{ companyId: entity.id }] }).pipe(pluck('entities'));
  }

}
