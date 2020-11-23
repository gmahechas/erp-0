import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100, grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CompanyResolver } from '@api-gateway-nestjs/modules/ms2/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms2/company/client/grpc/company-grpc.service';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms2/office/client/grpc/office-grpc.service';
import { CityGrpcService } from '@api-gateway-nestjs/modules/ms1/city/client/grpc/city-grpc.service';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms1/address/client/grpc/address-grpc.service';

describe('CompanyResolver', () => {
  let companyResolver: CompanyResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        grpcMs200,
        CompanyResolver,
        CompanyGrpcService,
        OfficeGrpcService,
        CityGrpcService,
        AddressGrpcService,
      ],
    }).compile();
    companyResolver = module.get<CompanyResolver>(CompanyResolver);
  });

  it('should be defined', () => {
    expect(companyResolver).toBeDefined();
  });
});
