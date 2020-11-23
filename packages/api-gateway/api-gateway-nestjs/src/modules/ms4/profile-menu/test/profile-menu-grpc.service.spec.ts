import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileMenuGrpcService } from '@api-gateway-nestjs/modules/ms4/profile-menu/client/grpc/profile-menu-grpc.service';

describe('ProfileMenuGrpcService', () => {
  let service: ProfileMenuGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs400, ProfileMenuGrpcService],
    }).compile();

    service = module.get<ProfileMenuGrpcService>(ProfileMenuGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
