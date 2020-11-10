import { Controller } from '@nestjs/common';

import { BaseGrpcController, profileMenuJoiSchema } from '@gmahechas/common-nestjs';

import { ProfileMenuMongodbService } from '@ms400/modules/profile-menu/client/mongodb/profile-menu-mongodb.service';

@Controller()
export class ProfileMenuGrpcController extends BaseGrpcController('ProfileMenuService', profileMenuJoiSchema) {

  constructor(
    private readonly profileMenuMongodbService: ProfileMenuMongodbService
  ) { super(profileMenuMongodbService); }

}
