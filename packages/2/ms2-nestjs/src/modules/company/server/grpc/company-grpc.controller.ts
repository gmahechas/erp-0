import { Controller } from '@nestjs/common';

import { BaseGrpcController, companyJoiSchema } from '@gmahechas/common-nestjs';

import { CompanyMongodbService } from '@ms2/modules/company/client/mongodb/company-mongodb.service';

@Controller()
export class CompanyGrpcController extends BaseGrpcController('CompanyService', companyJoiSchema) {

  constructor(
    private readonly companyMongodbService: CompanyMongodbService
  ) { super(companyMongodbService); }

}
