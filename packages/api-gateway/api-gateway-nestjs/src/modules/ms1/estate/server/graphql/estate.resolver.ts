import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { estateJoiSchema, ICountry, ICity } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms1/estate/client/grpc/estate-grpc.service';
import { EstateType } from '@api-gateway-nestjs/modules/ms1/estate/server/graphql/estate.type';
import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms1/country/client/grpc/country-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';
import { CountryType } from '@api-gateway-nestjs/modules/ms1/country/server/graphql/country.type';
import { CityType } from '@api-gateway-nestjs/modules/ms1/city/server/graphql/city.type';

import {
  EstateCreateInput, EstateSearchInput,
  EstateUpdateInput, EstateDeleteInput
} from '@api-gateway-nestjs/modules/ms1/estate/server/graphql/estate.input';

@Resolver(() => EstateType)
export class EstateResolver extends BaseResolver(
    EstateType,
    EstateCreateInput, EstateSearchInput,
    EstateUpdateInput, EstateDeleteInput,
    'Estate', estateJoiSchema
  ) implements OnModuleInit {

  private countryGrpcService: CountryGrpcService;
  private cityGrpcService: CityGrpcService;

  constructor(
    private readonly estateGrpcService: EstateGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(estateGrpcService); }

  onModuleInit(): void {
    this.countryGrpcService = this.moduleRef.get(CountryGrpcService, { strict: false });
    this.cityGrpcService = this.moduleRef.get(CityGrpcService, { strict: false });
  }

  @ResolveField(() => CountryType)
  country(@Parent() entity: EstateType): Observable<Partial<ICountry>> {
    return this.countryGrpcService.searchById({ entity: { id: entity.countryId } }).pipe(pluck('entity'));
  }

  @ResolveField(() => [CityType])
  cities(@Parent() entity: EstateType): Observable<Partial<ICity>[]> {
    return this.cityGrpcService.searchMany({ entities: [{ estateId: entity.id }] }).pipe(pluck('entities'));
  }

}
