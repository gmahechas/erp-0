import { Module } from '@nestjs/common';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileResolver } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';

@Module({
  providers: [
    grpcMs400,
    ProfileResolver,
    ProfileGrpcService
  ]
})
export class ProfileModule {}
