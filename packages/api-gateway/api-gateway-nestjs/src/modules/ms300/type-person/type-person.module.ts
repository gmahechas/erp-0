import { Module } from '@nestjs/common';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypePersonResolver } from '@api-gateway-nestjs/modules/ms300/type-person/server/graphql/type-person.resolver';
import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms300/type-person/client/grpc/type-person-grpc.service';

@Module({
  providers: [
    grpcMs300,
    TypePersonResolver,
    TypePersonGrpcService
  ]
})
export class TypePersonModule {}
