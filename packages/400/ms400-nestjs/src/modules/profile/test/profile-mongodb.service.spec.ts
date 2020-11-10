import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { ProfileDocument } from '@ms400/modules/profile/client/mongodb/profile.schema';

import { ProfileMongodbService } from '@ms400/modules/profile/client/mongodb/profile-mongodb.service';

describe('ProfileMongodbService', () => {
  let service: ProfileMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProfileMongodbService,
        { provide: getModelToken(ProfileDocument.name), useValue: ProfileDocument }
      ],
    }).compile();

    service = module.get<ProfileMongodbService>(ProfileMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
