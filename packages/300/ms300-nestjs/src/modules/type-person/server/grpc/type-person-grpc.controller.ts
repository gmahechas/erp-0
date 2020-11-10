import { Controller } from '@nestjs/common';

import { BaseGrpcController, typePersonJoiSchema } from '@gmahechas/common-nestjs';

import { TypePersonMongodbService } from '@ms300/modules/type-person/client/mongodb/type-person-mongodb.service';

@Controller()
export class TypePersonGrpcController extends BaseGrpcController('TypePersonService', typePersonJoiSchema) {

  constructor(
    private readonly typePersonMongodbService: TypePersonMongodbService
  ) { super(typePersonMongodbService); }

}
