import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { UserDocument } from '@auth/modules/user/client/mongodb/user.schema';

import { UserGrpcController } from '@auth/modules/user/server/grpc/user-grpc.controller';
import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

describe('UserGrpc Controller', () => {
  let controller: UserGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserGrpcController],
      providers: [
        UserMongodbService,
        { provide: getModelToken(UserDocument.name), useValue: UserDocument },
      ],
    }).compile();

    controller = module.get<UserGrpcController>(UserGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
