import { Module } from '@nestjs/common';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { DepartmentResolver } from '@api-gateway-nestjs/modules/ms200/department/server/graphql/department.resolver';
import { DepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/department/client/grpc/department-grpc.service';

@Module({
  providers: [
    grpcMs200,
    DepartmentResolver,
    DepartmentGrpcService
  ]
})
export class DepartmentModule {}
