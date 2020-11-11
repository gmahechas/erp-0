import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  CityType, EstateType,
  cityJoiSchema, IEstate, BaseResolver,
  CityCreateInput, CitySearchInput,
  CityUpdateInput, CityDeleteInput
} from '@gmahechas/common-nestjs';

import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms100/estate/client/grpc/estate-grpc.service';

@Resolver(() => CityType)
export class CityResolver extends BaseResolver(
    CityType,
    CityCreateInput, CitySearchInput,
    CityUpdateInput, CityDeleteInput,
    'City', cityJoiSchema
  ) implements OnModuleInit {

  private estateGrpcService: EstateGrpcService;

  constructor(
    private readonly cityGrpcService: CityGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(cityGrpcService); }

  onModuleInit(): void {
    this.estateGrpcService = this.moduleRef.get(EstateGrpcService, { strict: false });
  }
  
  @ResolveField(() => EstateType)
  estate(@Parent() entity: CityType): Observable<Partial<IEstate>> {
    return this.estateGrpcService.searchById({ entity: { id: entity.estateId } }).pipe(pluck('entity'));
  }

}
