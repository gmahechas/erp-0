import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';

describe('CompanyGrpcService', () => {
  let companyGrpcService: CompanyGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        CompanyGrpcService
      ],
    }).compile();
    companyGrpcService = module.get<CompanyGrpcService>(CompanyGrpcService);
  });

  it('should be defined', () => {
    expect(companyGrpcService).toBeDefined();
  });

});