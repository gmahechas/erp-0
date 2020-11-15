import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { OfficeDocument } from '@ms2/modules/office/client/mongodb/office.schema';

import { OfficeMongodbService } from '@ms2/modules/office/client/mongodb/office-mongodb.service';

describe('OfficeMongodbService', () => {
  let officeMongodbService: OfficeMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OfficeMongodbService,
        { provide: getModelToken(OfficeDocument.name), useValue: OfficeDocument },
      ],
    }).compile();
    officeMongodbService = module.get<OfficeMongodbService>(OfficeMongodbService);
  });

  it('should be defined', () => {
    expect(officeMongodbService).toBeDefined();
  });

});