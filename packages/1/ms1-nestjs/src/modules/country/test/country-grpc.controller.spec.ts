import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CountryDocument } from '@ms1/modules/country/client/mongodb/country.schema';

import { CountryGrpcController } from '@ms1/modules/country/server/grpc/country-grpc.controller';
import { CountryMongodbService } from '@ms1/modules/country/client/mongodb/country-mongodb.service';

describe('CountryGrpcController', () => {
  let countryGrpcController: CountryGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryGrpcController],
      providers: [
        CountryMongodbService,
        {
          provide: getModelToken(CountryDocument.name),
          useValue: CountryDocument,
        },
      ],
    }).compile();
    countryGrpcController = module.get<CountryGrpcController>(
      CountryGrpcController,
    );
  });

  it('should be defined', () => {
    expect(countryGrpcController).toBeDefined();
  });
});
