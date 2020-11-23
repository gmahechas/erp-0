import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { TypeIdentificationDocument } from '@ms3/modules/type-identification/client/mongodb/type-identification.schema';

import { TypeIdentificationGrpcController } from '@ms3/modules/type-identification/server/grpc/type-identification-grpc.controller';
import { TypeIdentificationMongodbService } from '@ms3/modules/type-identification/client/mongodb/type-identification-mongodb.service';

describe('TypeIdentificationGrpcController', () => {
  let typeIdentificationGrpcController: TypeIdentificationGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeIdentificationGrpcController],
      providers: [
        TypeIdentificationMongodbService,
        {
          provide: getModelToken(TypeIdentificationDocument.name),
          useValue: TypeIdentificationDocument,
        },
      ],
    }).compile();

    typeIdentificationGrpcController = module.get<
      TypeIdentificationGrpcController
    >(TypeIdentificationGrpcController);
  });

  it('should be defined', () => {
    expect(typeIdentificationGrpcController).toBeDefined();
  });
});
