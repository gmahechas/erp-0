import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms2/office/client/grpc/office-grpc.service';

describe('OfficeGrpcService', () => {
  let officeGrpcService: OfficeGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs200, OfficeGrpcService],
    }).compile();
    officeGrpcService = module.get<OfficeGrpcService>(OfficeGrpcService);
  });

  it('should be defined', () => {
    expect(officeGrpcService).toBeDefined();
  });
});
