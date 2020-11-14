import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserGrpcService } from '@api-gateway-nestjs/modules/auth/user/client/grpc/user-grpc.service';

describe('UserGrpcService', () => {
  let service: UserGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        UserGrpcService
      ],
    }).compile();

    service = module.get<UserGrpcService>(UserGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
