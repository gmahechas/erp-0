import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { EstateDocument } from '@ms100/modules/estate/client/mongodb/estate.schema';

import { EstateGrpcController } from '@ms100/modules/estate/server/grpc/estate-grpc.controller';
import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';

describe('EstateGrpcController', () => {
  let estateGrpcController: EstateGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        EstateGrpcController
      ],
      providers: [
        EstateMongodbService,
        { provide: getModelToken(EstateDocument.name), useValue: EstateDocument },
      ],
    }).compile();
    estateGrpcController = module.get<EstateGrpcController>(EstateGrpcController);
  });

  it('should be defined', () => {
    expect(estateGrpcController).toBeDefined();
  });
});
