import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  OfficeType, CompanyType, OfficeDepartmentType, AddressType,
  officeJoiSchema, ICompany, IOfficeDepartment, IAddress, BaseResolver,
  OfficeCreateInput, OfficeSearchInput,
  OfficeUpdateInput, OfficeDeleteInput
} from '@gmahechas/common-nestjs';

import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service'
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms100/address/client/grpc/address-grpc.service';

@Resolver(() => OfficeType)
export class OfficeResolver extends BaseResolver(
    OfficeType,
    OfficeCreateInput, OfficeSearchInput,
    OfficeUpdateInput, OfficeDeleteInput,
    'Office', officeJoiSchema
  ) implements OnModuleInit {

  private companyGrpcService: CompanyGrpcService;
  private addressGrpcService: AddressGrpcService;
  private officeDepartmentGrpcService: OfficeDepartmentGrpcService;

  constructor(
    private readonly officeGrpcService: OfficeGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(officeGrpcService); }

  onModuleInit(): void {
    this.companyGrpcService = this.moduleRef.get(CompanyGrpcService, { strict: false });
    this.addressGrpcService = this.moduleRef.get(AddressGrpcService, { strict: false });
    this.officeDepartmentGrpcService = this.moduleRef.get(OfficeDepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => CompanyType)
  company(@Parent() entity: OfficeType): Observable<Partial<ICompany>> {
    return this.companyGrpcService.searchById({ entity: { id: entity.companyId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => AddressType)
  address(@Parent() entity: OfficeType): Observable<Partial<IAddress>> {
    return this.addressGrpcService.searchById({ entity: { id: entity.addressId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [OfficeDepartmentType])
  officeDepartments(@Parent() entity: OfficeType): Observable<Partial<IOfficeDepartment>[]> {
    return this.officeDepartmentGrpcService.searchMany({ entities: [{ officeId: entity.id }] }).pipe(pluck('entities'));
  }

}
