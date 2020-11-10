import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { AddressDocument } from '@ms100/modules/address/client/mongodb/address.schema';

import { AddressGrpcController } from '@ms100/modules/address/server/grpc/address-grpc.controller';
import { AddressMongodbService } from '@ms100/modules/address/client/mongodb/address-mongodb.service';

describe('AddressGrpcController', () => {
  let addressGrpcController: AddressGrpcController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [
        AddressGrpcController
      ],
      providers: [
        AddressMongodbService,
        { provide: getModelToken(AddressDocument.name), useValue: AddressDocument },
      ],
    }).compile();
    addressGrpcController = module.get<AddressGrpcController>(AddressGrpcController);
  });

  it('should be defined', () => {
    expect(addressGrpcController).toBeDefined();
  });
});
