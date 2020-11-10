import { Controller } from '@nestjs/common';

import { BaseGrpcController, menuJoiSchema } from '@gmahechas/common-nestjs';

import { MenuMongodbService } from '@ms400/modules/menu/client/mongodb/menu-mongodb.service';

@Controller()
export class MenuGrpcController extends BaseGrpcController('MenuService', menuJoiSchema) {

  constructor(
    private readonly menuMongodbService: MenuMongodbService
  ) { super(menuMongodbService); }

}
