import { Controller } from '@nestjs/common';

import { BaseGrpcController, typeIdentificationJoiSchema } from '@gmahechas/common-nestjs';

import { TypeIdentificationMongodbService } from '@ms300/modules/type-identification/client/mongodb/type-identification-mongodb.service';

@Controller()
export class TypeIdentificationGrpcController extends BaseGrpcController('TypeIdentificationService', typeIdentificationJoiSchema) {

  constructor(
    private readonly typeIdentificationMongodbService: TypeIdentificationMongodbService
  ) { super(typeIdentificationMongodbService); }

}
