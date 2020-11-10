import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileMenuResolver } from '@api-gateway-nestjs/modules/ms400/profile-menu/server/graphql/profile-menu.resolver';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms400/profile-menu/client/grpc/profile-menu-grpc.service';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms400/profile/client/grpc/profile-grpc.service';
import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms400/menu/client/grpc/menu-grpc.service';

describe('ProfileMenuResolver', () => {
  let resolver: ProfileMenuResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        ProfileMenuResolver,
        ProfileMenuGrpcService,
        ProfileGrpcService,
        MenuGrpcService
      ],
    }).compile();

    resolver = module.get<ProfileMenuResolver>(ProfileMenuResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
