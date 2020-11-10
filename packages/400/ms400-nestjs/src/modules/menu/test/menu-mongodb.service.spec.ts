import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { MenuDocument } from '@ms400/modules/menu/client/mongodb/menu.schema';

import { MenuMongodbService } from '@ms400/modules/menu/client/mongodb/menu-mongodb.service';

describe('MenuMongodbService', () => {
  let service: MenuMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MenuMongodbService,
        { provide: getModelToken(MenuDocument.name), useValue: MenuDocument },
      ],
    }).compile();

    service = module.get<MenuMongodbService>(MenuMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
