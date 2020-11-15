import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { TypePersonResolver } from '@api-gateway-nestjs/modules/ms3/type-person/server/graphql/type-person.resolver';
import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms3/type-person/client/grpc/type-person-grpc.service';

describe('TypePersonResolver', () => {
  let typePersonResolver: TypePersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs300,
        TypePersonResolver,
        TypePersonGrpcService
      ],
    }).compile();

    typePersonResolver = module.get<TypePersonResolver>(TypePersonResolver);
  });

  it('should be defined', () => {
    expect(typePersonResolver).toBeDefined();
  });
});
