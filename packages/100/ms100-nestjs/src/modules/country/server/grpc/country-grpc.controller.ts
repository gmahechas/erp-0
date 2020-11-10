import { Controller } from '@nestjs/common';

import { BaseGrpcController, countryJoiSchema } from '@gmahechas/common-nestjs';

import { CountryMongodbService } from '@ms100/modules/country/client/mongodb/country-mongodb.service';

@Controller()
export class CountryGrpcController extends BaseGrpcController('CountryService', countryJoiSchema) {

  constructor(
    private readonly countryMongodbService: CountryMongodbService
  ) { super(countryMongodbService); }

}
