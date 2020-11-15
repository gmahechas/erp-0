import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ProfileDocument } from '@ms4/modules/profile/client/mongodb/profile.schema';

import { ProfileGrpcController } from '@ms4/modules/profile/server/grpc/profile-grpc.controller';
import { ProfileMongodbService } from '@ms4/modules/profile/client/mongodb/profile-mongodb.service';

describe('ProfileGrpcController', () => {
  let controller: ProfileGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileGrpcController],
      providers: [
        ProfileMongodbService,
        { provide: getModelToken(ProfileDocument.name), useValue: ProfileDocument },
      ],
    }).compile();

    controller = module.get<ProfileGrpcController>(ProfileGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
