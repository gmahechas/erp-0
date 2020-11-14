import { Module } from '@nestjs/common';

import { grpcAuth } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserProfileResolver } from '@api-gateway-nestjs/modules/auth/user-profile/server/graphql/user-profile.resolver';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/auth/user-profile/client/grpc/user-profile-grpc.service';

@Module({
  providers: [
    grpcAuth,
    UserProfileResolver,
    UserProfileGrpcService
  ]
})
export class UserProfileModule { }
