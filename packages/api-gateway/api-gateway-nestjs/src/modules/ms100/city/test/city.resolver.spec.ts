import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CityResolver } from '@api-gateway-nestjs/modules/ms100/city/server/graphql/city.resolver';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms100/city/client/grpc/city-grpc.service';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms100/estate/client/grpc/estate-grpc.service';

describe('CityResolver', () => {
  let cityResolver: CityResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        CityResolver,
        CityGrpcService,
        EstateGrpcService
      ],
    }).compile();
    cityResolver = module.get<CityResolver>(CityResolver);
  });

  it('should be defined', () => {
    expect(cityResolver).toBeDefined();
  });

});
