import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { EstateResolver } from '@api-gateway-nestjs/modules/ms1/estate/server/graphql/estate.resolver';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms1/estate/client/grpc/estate-grpc.service';
import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms1/country/client/grpc/country-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';

describe('EstateResolver', () => {
  let estateResolver: EstateResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        EstateResolver,
        EstateGrpcService,
        CountryGrpcService,
        CityGrpcService,
      ],
    }).compile();
    estateResolver = module.get<EstateResolver>(EstateResolver);
  });

  it('should be defined', () => {
    expect(estateResolver).toBeDefined();
  });
});
