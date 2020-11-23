import { Test, TestingModule } from '@nestjs/testing';

import { grpcMs300, grpcMs400 } from '@api-gateway-nestjs/utils/grpc.providers';
import { UserResolver } from '@api-gateway-nestjs/modules/ms4/user/server/graphql/user.resolver';
import { UserGrpcService } from '@api-gateway-nestjs/modules/ms4/user/client/grpc/user-grpc.service';
import { PersonGrpcService } from '@api-gateway-nestjs/modules/ms3/person/client/grpc/person-grpc.service';
import { UserProfileGrpcService } from '@api-gateway-nestjs/modules/ms4/user-profile/client/grpc/user-profile-grpc.service';

describe('UserResolver', () => {
  let resolver: UserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        grpcMs300,
        grpcMs400,
        UserResolver,
        UserGrpcService,
        PersonGrpcService,
        UserProfileGrpcService,
      ],
    }).compile();

    resolver = module.get<UserResolver>(UserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
