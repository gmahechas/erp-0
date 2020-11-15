import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CityDocument } from '@ms1/modules/city/client/mongodb/city.schema';

import { CityGrpcController } from '@ms1/modules/city/server/grpc/city-grpc.controller';
import { CityMongodbService } from '@ms1/modules/city/client/mongodb/city-mongodb.service';

describe('CityGrpcController', () => {
  let cityGrpcController: CityGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        CityGrpcController
      ],
      providers: [
        CityMongodbService,
        { provide: getModelToken(CityDocument.name), useValue: CityDocument },
      ],
    }).compile();
    cityGrpcController = module.get<CityGrpcController>(CityGrpcController);
  });

  it('should be defined', () => {
    expect(cityGrpcController).toBeDefined();
  });
});
