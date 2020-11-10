import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { AddressDocument } from '@ms100/modules/address/client/mongodb/address.schema';

import { AddressMongodbService } from '@ms100/modules/address/client/mongodb/address-mongodb.service';

describe('AddressMongodbService', () => {
  let addressMongodbService: AddressMongodbService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressMongodbService,
        { provide: getModelToken(AddressDocument.name), useValue: AddressDocument },
      ],
    }).compile();
    addressMongodbService = module.get<AddressMongodbService>(AddressMongodbService);
  });

  it('should be defined', () => {
    expect(addressMongodbService).toBeDefined();
  });

});