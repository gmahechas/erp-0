import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileResolver } from '@api-gateway-nestjs/modules/ms4/profile/server/graphql/profile.resolver';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';

describe('ProfileResolver', () => {
  let resolver: ProfileResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        ProfileResolver,
        ProfileGrpcService,
        ProfileMenuGrpcService
      ],
    }).compile();

    resolver = module.get<ProfileResolver>(ProfileResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
