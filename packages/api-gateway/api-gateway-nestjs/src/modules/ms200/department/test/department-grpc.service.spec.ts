import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';

describe('DepartmentGrpcService', () => {
  let service: DepartmentGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        DepartmentGrpcService
      ],
    }).compile();

    service = module.get<DepartmentGrpcService>(DepartmentGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
