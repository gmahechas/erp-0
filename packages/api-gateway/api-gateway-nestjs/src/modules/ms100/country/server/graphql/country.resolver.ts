import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  CountryType, EstateType,
  countryJoiSchema, IEstate, BaseResolver,
  CountryCreateInput, CountrySearchInput,
  CountryUpdateInput, CountryDeleteInput,
} from '@gmahechas/common-nestjs';

import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms100/country/client/grpc/country-grpc.service';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms100/estate/client/grpc/estate-grpc.service';

@Resolver(() => CountryType)
export class CountryResolver extends BaseResolver(
    CountryType,
    CountryCreateInput, CountrySearchInput,
    CountryUpdateInput, CountryDeleteInput,
    'Country', countryJoiSchema
  ) implements OnModuleInit {

  private estateGrpcService: EstateGrpcService;

  constructor(
    private readonly countryGrpcService: CountryGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(countryGrpcService); }

  onModuleInit(): void {
    this.estateGrpcService = this.moduleRef.get(EstateGrpcService, { strict: false });
  }

  @ResolveField(() => [EstateType])
  estates(@Parent() entity: CountryType): Observable<Partial<IEstate>[] | null> {
    return this.estateGrpcService.searchMany({ entities: [{ countryId: entity.id }] }).pipe(pluck('entities'));
  }

}

