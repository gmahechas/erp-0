import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs200, grpcMs300 } from '@api-gateway-nestjs/utils/grpc.providers';
import { PersonResolver } from '@api-gateway-nestjs/modules/ms300/person/server/graphql/person.resolver';
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms300/person/client/grpc/person-grpc.service';
import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms300/type-person/client/grpc/type-person-grpc.service';
import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms300/type-identification/client/grpc/type-identification-grpc.service';
import { CompanyGrpcService } from '@api-gateway-nestjs/modules/ms200/company/client/grpc/company-grpc.service';

describe('PersonResolver', () => {
  let personResolver: PersonResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs200,
        grpcMs300,
        PersonResolver,
        PersonGrpcService,
        TypePersonGrpcService,
        TypeIdentificationGrpcService,
        CompanyGrpcService
      ],
    }).compile();

    personResolver = module.get<PersonResolver>(PersonResolver);
  });

  it('should be defined', () => {
    expect(personResolver).toBeDefined();
  });
});
