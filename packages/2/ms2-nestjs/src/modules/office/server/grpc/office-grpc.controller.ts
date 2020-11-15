import { Controller } from '@nestjs/common';

import { BaseGrpcController, officeJoiSchema } from '@gmahechas/common-nestjs';

import { OfficeMongodbService } from '@ms2/modules/office/client/mongodb/office-mongodb.service';

@Controller()
export class OfficeGrpcController extends BaseGrpcController('OfficeService', officeJoiSchema) {

  constructor(
    private readonly officeMongodbService: OfficeMongodbService
  ) { super(officeMongodbService); }

}
