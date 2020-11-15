import { Module } from '@nestjs/common';

import { grpcAuth } from '@api-gateway-nestjs/utils/grpc.providers';
import { AuthenticationResolver } from '@api-gateway-nestjs/modules/auth/authentication/server/graphql/authentication.resolver';
import { AuthenticationGrpcService } from '@api-gateway-nestjs/modules/auth/authentication/client/authentication-grpc.service';

@Module({
  providers: [
    grpcAuth,
    AuthenticationResolver,
    AuthenticationGrpcService
  ]
})
export class AuthenticationModule { }
