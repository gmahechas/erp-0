import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ProfileMenuDocument } from '@ms400/modules/profile-menu/client/mongodb/profile-menu.schema';

import { ProfileMenuGrpcController } from '@ms400/modules/profile-menu/server/grpc/profile-menu-grpc.controller';
import { ProfileMenuMongodbService } from '@ms400/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

describe('ProfileMenuGrpc Controller', () => {
  let controller: ProfileMenuGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileMenuGrpcController],
      providers: [
        ProfileMenuMongodbService,
        { provide: getModelToken(ProfileMenuDocument.name), useValue: ProfileMenuDocument },
      ],
    }).compile();

    controller = module.get<ProfileMenuGrpcController>(ProfileMenuGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
