import { Module } from '@nestjs/common';

import { grpcAuth } from '@api-gateway-nestjs/utils/grpc.providers';
import { AuthResolver } from '@api-gateway-nestjs/modules/auth/auth/server/graphql/auth.resolver';
import { AuthGrpcService } from '@api-gateway-nestjs/modules/auth/auth/client/grpc/auth-grpc.service';

@Module({
  providers: [grpcAuth, AuthResolver, AuthGrpcService],
})
export class AuthModule {}
