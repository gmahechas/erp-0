import { Module } from '@nestjs/common';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CompanyResolver } from '@api-gateway-nestjs/modules/ms200/company/server/graphql/company.resolver';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';

@Module({
  providers: [
    grpcMs200,
    CompanyResolver,
    CompanyGrpcService
  ]
})
export class CompanyModule {}