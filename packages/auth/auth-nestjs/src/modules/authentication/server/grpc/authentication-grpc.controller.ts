import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { Observable } from 'rxjs';

import {
  IEntityOne,
  ILoginRequest,
  ILoginResponse,
} from '@gmahechas/common-nestjs';

import { AuthenticationRedisService } from '@auth/modules/authentication/client/redis/authentication-redis.service';

@Controller()
export class AuthenticationGrpcController {
  constructor(
    private readonly authenticationRedisService: AuthenticationRedisService,
  ) {}

  @GrpcMethod('AuthenticationService')
  login(data: ILoginRequest): Observable<IEntityOne<ILoginResponse>> {
    return this.authenticationRedisService.validate(data);
  }
}
