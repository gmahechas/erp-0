import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeDepartmentResolver } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.resolver';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms200/office/client/grpc/office-grpc.service';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';

describe('OfficeDepartmentResolver', () => {
  let resolver: OfficeDepartmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        OfficeDepartmentResolver,
        OfficeDepartmentGrpcService,
        OfficeGrpcService,
        DepartmentGrpcService
      ],
    }).compile();

    resolver = module.get<OfficeDepartmentResolver>(OfficeDepartmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
