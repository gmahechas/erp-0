import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  OfficeDepartmentType, OfficeType, DepartmentType,
  officeDepartmentJoiSchema, IOffice, IDepartment, BaseResolver,
  OfficeDepartmentCreateInput, OfficeDepartmentSearchInput,
  OfficeDepartmentUpdateInput, OfficeDepartmentDeleteInput
} from '@gmahechas/common-nestjs';

import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';

@Resolver(() => OfficeDepartmentType)
export class OfficeDepartmentResolver extends BaseResolver(
    OfficeDepartmentType,
    OfficeDepartmentCreateInput, OfficeDepartmentSearchInput,
    OfficeDepartmentUpdateInput, OfficeDepartmentDeleteInput,
    'OfficeDepartment', officeDepartmentJoiSchema
  ) implements OnModuleInit {

    private officeGrpcService: OfficeGrpcService;
    private departmentGrpcService: DepartmentGrpcService;

  constructor(
    private readonly officeDepartmentGrpcService: OfficeDepartmentGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(officeDepartmentGrpcService); }

  onModuleInit(): void {
    this.officeGrpcService = this.moduleRef.get(OfficeGrpcService, { strict: false });
    this.departmentGrpcService = this.moduleRef.get(DepartmentGrpcService, { strict: false });
  }

  @ResolveField(() => OfficeType)
  office(@Parent() entity: OfficeDepartmentType): Observable<Partial<IOffice>> {
    return this.officeGrpcService.searchById({ entity: { id: entity.officeId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => DepartmentType)
  department(@Parent() entity: OfficeDepartmentType): Observable<Partial<IDepartment>> {
    return this.departmentGrpcService.searchById({ entity: { id: entity.departmentId } }).pipe(pluck('entity'));
  }
}
