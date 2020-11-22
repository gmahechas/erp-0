import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { PersonDocument } from '@ms3/modules/person/client/mongodb/person.schema';

import { PersonGrpcController } from '@ms3/modules/person/server/grpc/person-grpc.controller';
import { PersonMongodbService } from '@ms3/modules/person/client/mongodb/person-mongodb.service';

describe('PersonGrpcController', () => {
  let personGrpcController: PersonGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonGrpcController],
      providers: [
        PersonMongodbService,
        {
          provide: getModelToken(PersonDocument.name),
          useValue: PersonDocument,
        },
      ],
    }).compile();

    personGrpcController = module.get<PersonGrpcController>(
      PersonGrpcController,
    );
  });

  it('should be defined', () => {
    expect(personGrpcController).toBeDefined();
  });
});
