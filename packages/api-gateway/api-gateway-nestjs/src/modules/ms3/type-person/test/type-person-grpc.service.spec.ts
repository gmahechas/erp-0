import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms3/type-person/client/grpc/type-person-grpc.service';

describe('TypePersonGrpcService', () => {
  let typePersonGrpcService: TypePersonGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs300, TypePersonGrpcService],
    }).compile();

    typePersonGrpcService = module.get<TypePersonGrpcService>(
      TypePersonGrpcService,
    );
  });

  it('should be defined', () => {
    expect(typePersonGrpcService).toBeDefined();
  });
});
