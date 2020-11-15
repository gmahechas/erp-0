import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { officeJoiSchema, ICompany } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms2/office/client/grpc/office-grpc.service'
import { OfficeType } from '@api-gateway-nestjs/modules/ms2/office/server/graphql/office.type';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms2/company/client/grpc/company-grpc.service';
import { CompanyType } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.type';

import {
  OfficeCreateInput, OfficeSearchInput,
  OfficeUpdateInput, OfficeDeleteInput
} from '@api-gateway-nestjs/modules/ms2/office/server/graphql/office.input';

@Resolver(() => OfficeType)
export class OfficeResolver extends BaseResolver(
    OfficeType,
    OfficeCreateInput, OfficeSearchInput,
    OfficeUpdateInput, OfficeDeleteInput,
    'Office', officeJoiSchema
  ) implements OnModuleInit {

  private companyGrpcService: CompanyGrpcService;

  constructor(
    private readonly officeGrpcService: OfficeGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(officeGrpcService); }

  onModuleInit(): void {
    this.companyGrpcService = this.moduleRef.get(CompanyGrpcService, { strict: false });
  }

  @ResolveField(() => CompanyType)
  company(@Parent() entity: OfficeType): Observable<Partial<ICompany>> {
    return this.companyGrpcService.searchById({ entity: { id: entity.companyId } }).pipe(pluck('entity'));
  }

}
