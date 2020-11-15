import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';

describe('UserProfileGrpcService', () => {
  let service: UserProfileGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        UserProfileGrpcService
      ],
    }).compile();

    service = module.get<UserProfileGrpcService>(UserProfileGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
