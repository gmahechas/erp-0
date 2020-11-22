import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserProfileResolver } from '@api-gateway-nestjs/modules/ms4/user-profile/server/graphql/user-profile.resolver';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';
import { UserGrpcService } from '@api-gateway-nestjs/modules/ms4/user/client/grpc/user-grpc.service';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';

describe('UserProfileResolver', () => {
  let resolver: UserProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        UserProfileResolver,
        UserProfileGrpcService,
        UserGrpcService,
        ProfileGrpcService,
      ],
    }).compile();

    resolver = module.get<UserProfileResolver>(UserProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
