import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';

describe('CityGrpcService', () => {
  let cityGrpcService: CityGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        CityGrpcService
      ],
    }).compile();
    cityGrpcService = module.get<CityGrpcService>(CityGrpcService);
  });

  it('should be defined', () => {
    expect(cityGrpcService).toBeDefined();
  });

});