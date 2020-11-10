import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';

describe('OfficeDepartmentGrpcService', () => {
  let service: OfficeDepartmentGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        OfficeDepartmentGrpcService
      ],
    }).compile();

    service = module.get<OfficeDepartmentGrpcService>(OfficeDepartmentGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
