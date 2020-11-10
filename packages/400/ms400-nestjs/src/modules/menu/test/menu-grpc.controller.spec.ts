import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { MenuDocument } from '@ms400/modules/menu/client/mongodb/menu.schema';

import { MenuGrpcController } from '@ms400/modules/menu/server/grpc/menu-grpc.controller';
import { MenuMongodbService } from '@ms400/modules/menu/client/mongodb/menu-mongodb.service';

describe('MenuGrpc Controller', () => {
  let controller: MenuGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuGrpcController],
      providers: [
        MenuMongodbService,
        { provide: getModelToken(MenuDocument.name), useValue: MenuDocument },
      ],
    }).compile();

    controller = module.get<MenuGrpcController>(MenuGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
