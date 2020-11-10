import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CountryResolver } from '@api-gateway-nestjs/modules/ms100/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms100/country/client/grpc/country-grpc.service';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms100/estate/client/grpc/estate-grpc.service';

describe('CountryResolver', () => {
  let countryResolver: CountryResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        CountryResolver,
        CountryGrpcService,
        EstateGrpcService
      ],
    }).compile();
    countryResolver = module.get<CountryResolver>(CountryResolver);
  });

  it('should be defined', () => {
    expect(countryResolver).toBeDefined();
  });

});
