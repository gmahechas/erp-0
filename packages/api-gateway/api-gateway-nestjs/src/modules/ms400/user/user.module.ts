import { Module } from '@nestjs/common';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserResolver } from '@api-gateway-nestjs/modules/ms400/user/server/graphql/user.resolver';
import { UserGrpcService } from '@api-gateway-nestjs/modules/ms400/user/client/grpc/user-grpc.service';

@Module({
  providers: [
    grpcMs400,
    UserResolver,
    UserGrpcService
  ]
})
export class UserModule {}
