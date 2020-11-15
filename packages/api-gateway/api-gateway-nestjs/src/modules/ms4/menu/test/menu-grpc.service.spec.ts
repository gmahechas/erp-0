import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { MenuGrpcService } from '@api-gateway-nestjs/modules/ms4/menu/client/grpc/menu-grpc.service';

describe('MenuGrpcService', () => {
  let service: MenuGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs400,
        MenuGrpcService
      ],
    }).compile();

    service = module.get<MenuGrpcService>(MenuGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
