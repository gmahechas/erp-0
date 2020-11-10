import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CountryDocument } from '@ms100/modules/country/client/mongodb/country.schema';

import { CountryMongodbService } from '@ms100/modules/country/client/mongodb/country-mongodb.service';

describe('CountryMongodbService', () => {
  let countryMongodbService: CountryMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountryMongodbService,
        { provide: getModelToken(CountryDocument.name), useValue: CountryDocument },
      ],
    }).compile();
    countryMongodbService = module.get<CountryMongodbService>(CountryMongodbService);
  });

  it('should be defined', () => {
    expect(countryMongodbService).toBeDefined();
  });

});