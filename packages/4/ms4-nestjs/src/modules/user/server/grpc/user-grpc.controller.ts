import { Controller } from '@nestjs/common';

import { BaseGrpcController, userJoiSchema } from '@gmahechas/common-nestjs';

import { UserMongodbService } from '@ms4/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController extends BaseGrpcController(
  'UserService',
  userJoiSchema,
) {
  constructor(private readonly userMongodbService: UserMongodbService) {
    super(userMongodbService);
  }
}
