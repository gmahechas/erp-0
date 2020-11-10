import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { companyJoiSchema, IOffice, IDepartment, ICity, IAddress, BaseResolver } from '@gmahechas/common-nestjs';

import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service'
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service';
import { OfficeType } from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.type';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';
import { DepartmentType } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.type';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';
import { CityType } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.type';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms100/address/client/grpc/address-grpc.service';
import { AddressType } from '@api-gateway-nestjs/modules/ms100/address/server/graphql/address.type';

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
  private addressGrpcService: AddressGrpcService;
  private officeGrpcService: OfficeGrpcService;
  private departmentGrpcService: DepartmentGrpcService;

  constructor(
    private readonly companyGrpcService: CompanyGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(companyGrpcService); }

  onModuleInit(): void {
    this.cityGrpcService = this.moduleRef.get(CityGrpcService, { strict: false });
    this.addressGrpcService = this.moduleRef.get(AddressGrpcService, { strict: false });
    this.officeGrpcService = this.moduleRef.get(OfficeGrpcService, { strict: false });
    this.departmentGrpcService = this.moduleRef.get(DepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => CityType)
  city(@Parent() entity: CompanyType): Observable<Partial<ICity>> {
    return this.cityGrpcService.searchById({ entity: { id: entity.cityId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => AddressType)
  address(@Parent() entity: CompanyType): Observable<Partial<IAddress>> {
    return this.addressGrpcService.searchById({ entity: { id: entity.addressId } }).pipe(pluck('entity'));
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
