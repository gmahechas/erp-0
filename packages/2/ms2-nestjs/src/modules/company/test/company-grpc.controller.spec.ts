import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { CompanyDocument } from '@ms2/modules/company/client/mongodb/company.schema';

import { CompanyGrpcController } from '@ms2/modules/company/server/grpc/company-grpc.controller';
import { CompanyMongodbService } from '@ms2/modules/company/client/mongodb/company-mongodb.service';

describe('CompanyGrpcController', () => {
  let companyGrpcController: CompanyGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyGrpcController],
      providers: [
        CompanyMongodbService,
        {
          provide: getModelToken(CompanyDocument.name),
          useValue: CompanyDocument,
        },
      ],
    }).compile();
    companyGrpcController = module.get<CompanyGrpcController>(
      CompanyGrpcController,
    );
  });

  it('should be defined', () => {
    expect(companyGrpcController).toBeDefined();
  });
});
