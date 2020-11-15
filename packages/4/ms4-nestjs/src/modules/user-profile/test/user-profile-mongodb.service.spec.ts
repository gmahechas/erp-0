import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { UserProfileDocument } from '@ms4/modules/user-profile/client/mongodb/user-profile.schema';

import { UserProfileMongodbService } from '@ms4/modules/user-profile/client/mongodb/user-profile-mongodb.service';

describe('UserProfileMongodbService', () => {
  let service: UserProfileMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserProfileMongodbService,
        { provide: getModelToken(UserProfileDocument.name), useValue: UserProfileDocument },
      ],
    }).compile();

    service = module.get<UserProfileMongodbService>(UserProfileMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
