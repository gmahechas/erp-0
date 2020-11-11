import { ModuleRef } from '@nestjs/core';
import { OnModuleInit } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import {
  AddressType, CityType,
  addressJoiSchema, ICity, BaseResolver,
  AddressCreateInput, AddressSearchInput,
  AddressUpdateInput, AddressDeleteInput
} from '@gmahechas/common-nestjs';

import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms100/address/client/grpc/address-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';

@Resolver(() => AddressType)
export class AddressResolver extends BaseResolver(
    AddressType,
    AddressCreateInput, AddressSearchInput,
    AddressUpdateInput, AddressDeleteInput,
    'Address', addressJoiSchema
  ) implements OnModuleInit {

  private cityGrpcService: CityGrpcService;

  constructor(
    private readonly addressGrpcService: AddressGrpcService,
    private readonly moduleRef: ModuleRef
  ) { super(addressGrpcService); }

  onModuleInit(): void {
    this.cityGrpcService = this.moduleRef.get(CityGrpcService, { strict: false });
  }

  @ResolveField(() => CityType)
  city(@Parent() entity: AddressType): Observable<Partial<ICity>> {
    return this.cityGrpcService.searchById({ entity: { id: entity.cityId } }).pipe(pluck('entity'));
  }

}
