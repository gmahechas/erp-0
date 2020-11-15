import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { ProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/profile/client/grpc/profile-grpc.service';

describe('ProfileGrpcService', () => {
  let service: ProfileGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        ProfileGrpcService
      ],
    }).compile();

    service = module.get<ProfileGrpcService>(ProfileGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
