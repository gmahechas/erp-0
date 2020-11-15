import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ProfileMenuDocument } from '@ms4/modules/profile-menu/client/mongodb/profile-menu.schema';

import { ProfileMenuMongodbService } from '@ms4/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

describe('ProfileMenuMongodbService', () => {
  let service: ProfileMenuMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileMenuMongodbService,
        { provide: getModelToken(ProfileMenuDocument.name), useValue: ProfileMenuDocument }
      ],
    }).compile();

    service = module.get<ProfileMenuMongodbService>(ProfileMenuMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
