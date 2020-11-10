import { Module } from '@nestjs/common';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeDepartmentResolver } from '@api-gateway-nestjs/modules/ms200/office-department/server/graphql/office-department.resolver';
import { OfficeDepartmentGrpcService } from '@api-gateway-nestjs/modules/ms200/office-department/client/grpc/office-department-grpc.service';

@Module({
  providers: [
    grpcMs200,
    OfficeDepartmentResolver,
    OfficeDepartmentGrpcService
  ]
})
export class OfficeDepartmentModule {}
