import { Module } from '@nestjs/common';

import { grpcMs200 } from '@api-gateway-nestjs/utils/grpc.providers';
import { OfficeResolver } from '@api-gateway-nestjs/modules/ms2/office/server/graphql/office.resolver';
import { OfficeGrpcService } from '@api-gateway-nestjs/modules/ms2/office/client/grpc/office-grpc.service';

@Module({
  providers: [
    grpcMs200,
    OfficeResolver,
    OfficeGrpcService
  ]
})
export class OfficeModule { }