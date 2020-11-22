import { Module } from '@nestjs/common';

import { grpcAuth } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserResolver } from '@api-gateway-nestjs/modules/auth/user/server/graphql/user.resolver';
import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';

@Module({
  providers: [grpcAuth, UserResolver, UserGrpcService],
})
export class UserModule {}
