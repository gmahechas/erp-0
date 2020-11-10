import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { TypeIdentificationDocument } from '@ms300/modules/type-identification/client/mongodb/type-identification.schema';

import { TypeIdentificationMongodbService } from '@ms300/modules/type-identification/client/mongodb/type-identification-mongodb.service';

describe('TypeIdentificationMongodbService', () => {
  let service: TypeIdentificationMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TypeIdentificationMongodbService,
        { provide: getModelToken(TypeIdentificationDocument.name), useValue: TypeIdentificationDocument },
      ],
    }).compile();

    service = module.get<TypeIdentificationMongodbService>(TypeIdentificationMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
