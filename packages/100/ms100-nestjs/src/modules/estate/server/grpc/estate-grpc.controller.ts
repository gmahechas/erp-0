import { Controller } from '@nestjs/common';

import { BaseGrpcController, estateJoiSchema } from '@gmahechas/common-nestjs';

import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';

@Controller()
export class EstateGrpcController extends BaseGrpcController('EstateService', estateJoiSchema) {

  constructor(
    private readonly estateMongodbService: EstateMongodbService
  ) { super(estateMongodbService); }

}
