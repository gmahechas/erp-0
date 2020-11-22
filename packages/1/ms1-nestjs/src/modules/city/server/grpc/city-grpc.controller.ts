import { Controller } from '@nestjs/common';

import { BaseGrpcController, cityJoiSchema } from '@gmahechas/common-nestjs';

import { CityMongodbService } from '@ms1/modules/city/client/mongodb/city-mongodb.service';

@Controller()
export class CityGrpcController extends BaseGrpcController(
  'CityService',
  cityJoiSchema,
) {
  constructor(private readonly cityMongodbService: CityMongodbService) {
    super(cityMongodbService);
  }
}
