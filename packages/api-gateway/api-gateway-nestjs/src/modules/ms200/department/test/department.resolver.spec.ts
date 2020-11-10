import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { DepartmentResolver } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.resolver';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';


describe('DepartmentResolver', () => {
  let resolver: DepartmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        DepartmentResolver,
        DepartmentGrpcService,
        CompanyGrpcService,
        OfficeDepartmentGrpcService
      ],
    }).compile();

    resolver = module.get<DepartmentResolver>(DepartmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
