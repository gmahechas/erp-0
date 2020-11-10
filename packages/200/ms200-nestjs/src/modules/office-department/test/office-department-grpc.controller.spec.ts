import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { OfficeDepartmentDocument } from '@ms200/modules/office-department/client/mongodb/office-department.schema';

import { OfficeDepartmentGrpcController } from '@ms200/modules/office-department/server/grpc/office-department-grpc.controller';
import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';

describe('OfficeDepartmentGrpc Controller', () => {
  let controller: OfficeDepartmentGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfficeDepartmentGrpcController],
      providers: [
        OfficeDepartmentMongodbService,
        { provide: getModelToken(OfficeDepartmentDocument.name), useValue: OfficeDepartmentDocument },
      ],
    }).compile();

    controller = module.get<OfficeDepartmentGrpcController>(OfficeDepartmentGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
