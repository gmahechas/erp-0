import { Controller } from '@nestjs/common';

import { BaseGrpcController, officeDepartmentJoiSchema } from '@gmahechas/common-nestjs';

import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';

@Controller()
export class OfficeDepartmentGrpcController extends BaseGrpcController('OfficeDepartmentService', officeDepartmentJoiSchema) {

  constructor(
    private readonly officeDepartmentMongodbService: OfficeDepartmentMongodbService
  ) { super(officeDepartmentMongodbService); }

}
