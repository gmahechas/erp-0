import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { EstateGrpcService } from '@api-gateway-nestjs/modules/ms100/estate/client/grpc/estate-grpc.service';

describe('EstateGrpcService', () => {
  let estateGrpcService: EstateGrpcService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs100,
        EstateGrpcService,
      ],
    }).compile();
    estateGrpcService = module.get<EstateGrpcService>(EstateGrpcService);
  });

  it('should be defined', () => {
    expect(estateGrpcService).toBeDefined();
  });

});