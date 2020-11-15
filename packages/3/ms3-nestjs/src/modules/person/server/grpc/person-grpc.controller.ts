import { Controller } from '@nestjs/common';

import { BaseGrpcController, personJoiSchema } from '@gmahechas/common-nestjs';

import { PersonMongodbService } from '@ms3/modules/person/client/mongodb/person-mongodb.service';

@Controller()
export class PersonGrpcController extends BaseGrpcController('PersonService', personJoiSchema) {

  constructor(
    private readonly personMongodbService: PersonMongodbService
  ) { super(personMongodbService); }

}
