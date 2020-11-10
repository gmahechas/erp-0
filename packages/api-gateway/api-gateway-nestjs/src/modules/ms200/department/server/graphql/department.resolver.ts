import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { departmentJoiSchema, ICompany, IOfficeDepartment, BaseResolver } from '@gmahechas/common-nestjs';

import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';
import { DepartmentType } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.type';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';
import { CompanyType } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.type';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';
import { OfficeDepartmentType } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.type';

import {
  DepartmentCreateInput, DepartmentSearchInput,
  DepartmentUpdateInput, DepartmentDeleteInput
} from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.input';

@Resolver(() => DepartmentType)
export class DepartmentResolver extends BaseResolver(
    DepartmentType,
    DepartmentCreateInput, DepartmentSearchInput,
    DepartmentUpdateInput, DepartmentDeleteInput,
    'Department', departmentJoiSchema
  ) implements OnModuleInit {

  private companyGrpcService: CompanyGrpcService;
  private officeDepartmentGrpcService: OfficeDepartmentGrpcService;

  constructor(
    private readonly departmentGrpcService: DepartmentGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(departmentGrpcService); }

  onModuleInit(): void {
    this.companyGrpcService = this.moduleRef.get(CompanyGrpcService, { strict: false });
    this.officeDepartmentGrpcService = this.moduleRef.get(OfficeDepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => CompanyType)
  company(@Parent() entity: DepartmentType): Observable<Partial<ICompany>> {
    return this.companyGrpcService.searchById({ entity: { id: entity.companyId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [OfficeDepartmentType])
  officesDepartment(@Parent() entity: DepartmentType): Observable<Partial<IOfficeDepartment>[]> {
    return this.officeDepartmentGrpcService.searchMany({ entities: [{ departmentId: entity.id }] }).pipe(pluck('entities'));
  }

}
