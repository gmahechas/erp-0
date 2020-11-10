import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypeIdentificationResolver } from '@api-gateway-nestjs/modules/ms300/type-identification/server/graphql/type-identification.resolver';
import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms300/type-identification/client/grpc/type-identification-grpc.service';

describe('TypeIdentificationResolver', () => {
  let typeIdentificationTesolver: TypeIdentificationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs300,
        TypeIdentificationResolver,
        TypeIdentificationGrpcService
      ],
    }).compile();

    typeIdentificationTesolver = module.get<TypeIdentificationResolver>(TypeIdentificationResolver);
  });

  it('should be defined', () => {
    expect(typeIdentificationTesolver).toBeDefined();
  });
});
