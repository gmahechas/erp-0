import { Controller } from '@nestjs/common';

import { BaseGrpcController, profileJoiSchema } from '@gmahechas/common-nestjs';

import { ProfileMongodbService } from '@ms4/modules/profile/client/mongodb/profile-mongodb.service';

@Controller()
export class ProfileGrpcController extends BaseGrpcController('ProfileService', profileJoiSchema) {

  constructor(
    private readonly profileMongodbService: ProfileMongodbService
  ) { super(profileMongodbService); }

}
