import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { TypePersonDocument } from '@ms3/modules/type-person/client/mongodb/type-person.schema';

import { TypePersonGrpcController } from '@ms3/modules/type-person/server/grpc/type-person-grpc.controller';
import { TypePersonMongodbService } from '@ms3/modules/type-person/client/mongodb/type-person-mongodb.service';

describe('TypePersonGrpcController', () => {
  let typePersonGrpcController: TypePersonGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypePersonGrpcController],
      providers: [
        TypePersonMongodbService,
        {
          provide: getModelToken(TypePersonDocument.name),
          useValue: TypePersonDocument,
        },
      ],
    }).compile();

    typePersonGrpcController = module.get<TypePersonGrpcController>(
      TypePersonGrpcController,
    );
  });

  it('should be defined', () => {
    expect(typePersonGrpcController).toBeDefined();
  });
});
