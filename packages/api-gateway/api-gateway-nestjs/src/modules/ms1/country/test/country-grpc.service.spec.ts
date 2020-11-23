import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms1/country/client/grpc/country-grpc.service';

describe('CountryGrpcService', () => {
  let countryGrpcService: CountryGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs100, CountryGrpcService],
    }).compile();
    countryGrpcService = module.get<CountryGrpcService>(CountryGrpcService);
  });

  it('should be defined', () => {
    expect(countryGrpcService).toBeDefined();
  });
});
