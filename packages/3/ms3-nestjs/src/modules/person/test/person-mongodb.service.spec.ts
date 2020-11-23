import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PersonDocument } from '@ms3/modules/person/client/mongodb/person.schema';

import { PersonMongodbService } from '@ms3/modules/person/client/mongodb/person-mongodb.service';

describe('PersonMongodbService', () => {
  let personMongodbService: PersonMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PersonMongodbService,
        {
          provide: getModelToken(PersonDocument.name),
          useValue: PersonDocument,
        },
      ],
    }).compile();

    personMongodbService = module.get<PersonMongodbService>(
      PersonMongodbService,
    );
  });

  it('should be defined', () => {
    expect(personMongodbService).toBeDefined();
  });
});
