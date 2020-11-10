import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { OfficeDepartmentDocument } from '@ms200/modules/office-department/client/mongodb/office-department.schema';

import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';

describe('OfficeDepartmentMongodbService', () => {
  let service: OfficeDepartmentMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OfficeDepartmentMongodbService,
        { provide: getModelToken(OfficeDepartmentDocument.name), useValue: OfficeDepartmentDocument }
      ],
    }).compile();

    service = module.get<OfficeDepartmentMongodbService>(OfficeDepartmentMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
