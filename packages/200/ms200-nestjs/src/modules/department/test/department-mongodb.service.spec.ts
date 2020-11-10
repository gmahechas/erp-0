import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { DepartmentDocument } from '@ms200/modules/department/client/mongodb/department.schema';

import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';

describe('DepartmentMongodbService', () => {
  let service: DepartmentMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartmentMongodbService,
        { provide: getModelToken(DepartmentDocument.name), useValue: DepartmentDocument },
      ],
    }).compile();

    service = module.get<DepartmentMongodbService>(DepartmentMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
