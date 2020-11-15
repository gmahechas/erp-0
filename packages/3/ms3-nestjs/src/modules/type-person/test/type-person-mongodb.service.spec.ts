import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { TypePersonDocument } from '@ms3/modules/type-person/client/mongodb/type-person.schema';

import { TypePersonMongodbService } from '@ms3/modules/type-person/client/mongodb/type-person-mongodb.service';

describe('TypePersonMongodbService', () => {
  let typePersonMongodbService: TypePersonMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypePersonMongodbService,
        { provide: getModelToken(TypePersonDocument.name), useValue: TypePersonDocument }
      ],
    }).compile();

    typePersonMongodbService = module.get<TypePersonMongodbService>(TypePersonMongodbService);
  });

  it('should be defined', () => {
    expect(typePersonMongodbService).toBeDefined();
  });
});
