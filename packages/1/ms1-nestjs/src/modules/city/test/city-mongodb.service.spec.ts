import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CityDocument } from '@ms1/modules/city/client/mongodb/city.schema';

import { CityMongodbService } from '@ms1/modules/city/client/mongodb/city-mongodb.service';

describe('CityMongodbService', () => {
  let cityMongodbService: CityMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityMongodbService,
        { provide: getModelToken(CityDocument.name), useValue: CityDocument },
      ],
    }).compile();
    cityMongodbService = module.get<CityMongodbService>(CityMongodbService);
  });

  it('should be defined', () => {
    expect(cityMongodbService).toBeDefined();
  });
});
