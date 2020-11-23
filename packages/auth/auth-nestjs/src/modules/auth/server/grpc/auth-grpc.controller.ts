import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import {
  ISigninRequest,
  ISigninResponse,
  Password,
} from '@gmahechas/common-nestjs';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class AuthGrpcController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @GrpcMethod('AuthService')
  async signin(data: ISigninRequest): Promise<ISigninResponse> {
    const { userName, userPassword } = data;
    const user = await this.userMongodbService.searchOneByUsername(userName);

    console.log(!!user);
    /*    const passwordsMatch = await Password.compare(
      user.userPassword,
      userPassword,
    );

    console.log(passwordsMatch); */

    return { successAuthUser: !!user };
  }
}
