import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { MenuResolver } from '@api-gateway-nestjs/modules/ms400/menu/server/graphql/menu.resolver';
import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms400/menu/client/grpc/menu-grpc.service';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms400/profile-menu/client/grpc/profile-menu-grpc.service';

describe('MenuResolver', () => {
  let resolver: MenuResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        MenuResolver,
        MenuGrpcService,
        ProfileMenuGrpcService
      ],
    }).compile();

    resolver = module.get<MenuResolver>(MenuResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
