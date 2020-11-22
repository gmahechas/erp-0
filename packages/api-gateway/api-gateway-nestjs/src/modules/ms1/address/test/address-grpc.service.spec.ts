import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms1/address/client/grpc/address-grpc.service';

describe('AddressGrpcService', () => {
  let addressGrpcService: AddressGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs100, AddressGrpcService],
    }).compile();
    addressGrpcService = module.get<AddressGrpcService>(AddressGrpcService);
  });

  it('should be defined', () => {
    expect(addressGrpcService).toBeDefined();
  });
});
