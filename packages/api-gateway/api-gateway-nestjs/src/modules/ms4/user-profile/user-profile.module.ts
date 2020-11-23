import { Module } from '@nestjs/common';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserProfileResolver } from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.resolver';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';

@Module({
  providers: [grpcMs400, UserProfileResolver, UserProfileGrpcService],
})
export class UserProfileModule {}
