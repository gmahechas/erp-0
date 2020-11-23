import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms3/person/client/grpc/person-grpc.service';

describe('PersonGrpcService', () => {
  let personGrpcService: PersonGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [grpcMs300, PersonGrpcService],
    }).compile();

    personGrpcService = module.get<PersonGrpcService>(PersonGrpcService);
  });

  it('should be defined', () => {
    expect(personGrpcService).toBeDefined();
  });
});
