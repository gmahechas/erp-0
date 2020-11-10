import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { OfficeDocument } from '@ms200/modules/office/client/mongodb/office.schema';

import { OfficeGrpcController } from '@ms200/modules/office/server/grpc/office-grpc.controller';
import { OfficeMongodbService } from '@ms200/modules/office/client/mongodb/office-mongodb.service';

describe('OfficeGrpcController', () => {
  let officeGrpcController: OfficeGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        OfficeGrpcController
      ],
      providers: [
        OfficeMongodbService,
        { provide: getModelToken(OfficeDocument.name), useValue: OfficeDocument },
      ],
    }).compile();
    officeGrpcController = module.get<OfficeGrpcController>(OfficeGrpcController);
  });

  it('should be defined', () => {
    expect(officeGrpcController).toBeDefined();
  });
});
