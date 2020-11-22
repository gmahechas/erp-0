import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { Observable, of } from 'rxjs';

import {
  BaseGrpcController,
  IEntityOne,
  userJoiSchema,
  ISigninRequest,
  ISigninResponse,
} from '@gmahechas/common-nestjs';

import { UserMongodbService } from '@auth/modules/user/client/mongodb/user-mongodb.service';

@Controller()
export class UserGrpcController extends BaseGrpcController(
  'UserService',
  userJoiSchema,
) {
  constructor(private readonly userMongodbService: UserMongodbService) {
    super(userMongodbService);
  }

  @GrpcMethod('UserService')
  singin(
    data: IEntityOne<ISigninRequest>,
  ): Observable<IEntityOne<ISigninResponse>> {
    const user = this.userMongodbService.searchOneByUsername(data);
    console.log(user);
    return of({ entity: { successAuthUser: false } });
  }
}
