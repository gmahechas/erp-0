import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100, grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeResolver } from '@api-gateway-nestjs/modules/ms2/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms2/office/client/grpc/office-grpc.service';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms2/company/client/grpc/company-grpc.service';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms1/address/client/grpc/address-grpc.service';

describe('OfficeResolver', () => {
  let officeResolver: OfficeResolver;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        grpcMs200,
        OfficeResolver,
        OfficeGrpcService,
        CompanyGrpcService,
        AddressGrpcService
      ],
    }).compile();
    officeResolver = module.get<OfficeResolver>(OfficeResolver);
  });

  it('should be defined', () => {
    expect(officeResolver).toBeDefined();
  });

});
