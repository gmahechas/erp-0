import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms3/type-identification/client/grpc/type-identification-grpc.service';

describe('TypeIdentificationGrpcService', () => {
  let typeIdentificationGrpcService: TypeIdentificationGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs300,
        TypeIdentificationGrpcService
      ],
    }).compile();

    typeIdentificationGrpcService = module.get<TypeIdentificationGrpcService>(TypeIdentificationGrpcService);
  });

  it('should be defined', () => {
    expect(typeIdentificationGrpcService).toBeDefined();
  });
});
