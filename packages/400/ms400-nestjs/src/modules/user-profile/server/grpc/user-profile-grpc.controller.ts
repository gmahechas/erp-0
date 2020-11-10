import { Controller } from '@nestjs/common';

import { BaseGrpcController, userProfileJoiSchema } from '@gmahechas/common-nestjs';

import { UserProfileMongodbService } from '@ms400/modules/user-profile/client/mongodb/user-profile-mongodb.service';

@Controller()
export class UserProfileGrpcController extends BaseGrpcController('UserProfileService', userProfileJoiSchema) {

  constructor(
    private readonly userProfileMongodbService: UserProfileMongodbService
  ) { super(userProfileMongodbService); }

}
