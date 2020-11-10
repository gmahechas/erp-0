import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { EstateDocument } from '@ms100/modules/estate/client/mongodb/estate.schema';

import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';

describe('EstateMongodbService', () => {
  let estateMongodbService: EstateMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstateMongodbService,
        { provide: getModelToken(EstateDocument.name), useValue: EstateDocument },
      ],
    }).compile();
    estateMongodbService = module.get<EstateMongodbService>(EstateMongodbService);
  });

  it('should be defined', () => {
    expect(estateMongodbService).toBeDefined();
  });

});