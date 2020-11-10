import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { AddressResolver } from '@api-gateway-nestjs/modules/ms100/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms100/address/client/grpc/address-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';

describe('AddressResolver', () => {
  let addressResolver: AddressResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        AddressResolver,
        AddressGrpcService,
        CityGrpcService
      ],
    }).compile();
    addressResolver = module.get<AddressResolver>(AddressResolver);
  });

  it('should be defined', () => {
    expect(addressResolver).toBeDefined();
  });

});
