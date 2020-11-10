import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { DepartmentDocument } from '@ms200/modules/department/client/mongodb/department.schema';

import { DepartmentGrpcController } from '@ms200/modules/department/server/grpc/department-grpc.controller';
import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';

describe('DepartmentGrpc Controller', () => {
  let controller: DepartmentGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentGrpcController],
      providers: [
        DepartmentMongodbService,
        { provide: getModelToken(DepartmentDocument.name), useValue: DepartmentDocument },
      ],
    }).compile();

    controller = module.get<DepartmentGrpcController>(DepartmentGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
