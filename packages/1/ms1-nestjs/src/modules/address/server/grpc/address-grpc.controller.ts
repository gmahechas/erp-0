import { Controller } from '@nestjs/common';

import { BaseGrpcController, addressJoiSchema } from '@gmahechas/common-nestjs';

import { AddressMongodbService } from '@ms1/modules/address/client/mongodb/address-mongodb.service';

@Controller()
export class AddressGrpcController extends BaseGrpcController('AddressService', addressJoiSchema) {

  constructor(
    private readonly addressMongodbService: AddressMongodbService
  ) { super(addressMongodbService); }

}
