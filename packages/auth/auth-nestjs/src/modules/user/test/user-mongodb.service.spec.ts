import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { UserDocument } from '@auth/modules/user/client/mongodb/user.schema';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

describe('UserMongodbService', () => {
  let service: UserMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserMongodbService,
        { provide: getModelToken(UserDocument.name), useValue: UserDocument },
      ],
    }).compile();

    service = module.get<UserMongodbService>(UserMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
