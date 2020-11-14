import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { officeJoiSchema, ICompany, IOfficeDepartment } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service'
import { OfficeType } from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.type';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';
import { OfficeDepartmentType } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.type';

import {
  OfficeCreateInput, OfficeSearchInput,
  OfficeUpdateInput, OfficeDeleteInput
} from '@api-gateway-nestjs/modules/ms200/office/server/graphql/office.input';

@Resolver(() => OfficeType)
export class OfficeResolver extends BaseResolver(
    OfficeType,
    OfficeCreateInput, OfficeSearchInput,
    OfficeUpdateInput, OfficeDeleteInput,
    'Office', officeJoiSchema
  ) implements OnModuleInit {

  private companyGrpcService: CompanyGrpcService;
  private officeDepartmentGrpcService: OfficeDepartmentGrpcService;

  constructor(
    private readonly officeGrpcService: OfficeGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(officeGrpcService); }

  onModuleInit(): void {
    this.companyGrpcService = this.moduleRef.get(CompanyGrpcService, { strict: false });
    this.officeDepartmentGrpcService = this.moduleRef.get(OfficeDepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => CompanyType)
  company(@Parent() entity: OfficeType): Observable<Partial<ICompany>> {
    return this.companyGrpcService.searchById({ entity: { id: entity.companyId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [OfficeDepartmentType])
  officeDepartments(@Parent() entity: OfficeType): Observable<Partial<IOfficeDepartment>[]> {
    return this.officeDepartmentGrpcService.searchMany({ entities: [{ officeId: entity.id }] }).pipe(pluck('entities'));
  }

}
