import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CompanyDocument } from '@ms200/modules/company/client/mongodb/company.schema';

import { CompanyMongodbService } from '@ms200/modules/company/client/mongodb/company-mongodb.service';

describe('CompanyMongodbService', () => {
  let companyMongodbService: CompanyMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompanyMongodbService,
        { provide: getModelToken(CompanyDocument.name), useValue: CompanyDocument },
      ],
    }).compile();
    companyMongodbService = module.get<CompanyMongodbService>(CompanyMongodbService);
  });

  it('should be defined', () => {
    expect(companyMongodbService).toBeDefined();
  });

});