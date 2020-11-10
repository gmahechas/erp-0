import { Controller } from '@nestjs/common';

import { BaseGrpcController, departmentJoiSchema } from '@gmahechas/common-nestjs';

import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';

@Controller()
export class DepartmentGrpcController extends BaseGrpcController('DepartmentService', departmentJoiSchema) {

  constructor(
    private readonly departmentMongodbService: DepartmentMongodbService
  ) { super(departmentMongodbService); }

}

