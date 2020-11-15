import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { UserProfileDocument } from '@ms4/modules/user-profile/client/mongodb/user-profile.schema';

import { UserProfileGrpcController } from '@ms4/modules/user-profile/server/grpc/user-profile-grpc.controller';
import { UserProfileMongodbService } from '@ms4/modules/user-profile/client/mongodb/user-profile-mongodb.service';

describe('UserProfileGrpc Controller', () => {
  let controller: UserProfileGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfileGrpcController],
      providers: [
        UserProfileMongodbService,
        { provide: getModelToken(UserProfileDocument.name), useValue: UserProfileDocument },
      ],
    }).compile();

    controller = module.get<UserProfileGrpcController>(UserProfileGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
