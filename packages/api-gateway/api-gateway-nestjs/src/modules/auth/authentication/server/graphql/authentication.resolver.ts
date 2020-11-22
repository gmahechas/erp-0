import { Args, Query, Resolver } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { ILoginResponse } from '@gmahechas/common-nestjs';

import { AuthenticationGrpcService } from '@api-gateway-nestjs/modules/auth/authentication/client/authentication-grpc.service';
import { LoginResponseType } from '@api-gateway-nestjs/modules/auth/authentication/server/graphql/authentication.type';
import { LoginRequestInput } from '@api-gateway-nestjs/modules/auth/authentication/server/graphql/authentication.input';

@Resolver()
export class AuthenticationResolver {
  constructor(
    private readonly authenticationGrpcService: AuthenticationGrpcService,
  ) {}

  @Query(() => LoginResponseType)
  login(
    @Args('entity') entity: LoginRequestInput,
  ): Observable<Partial<ILoginResponse>> {
    return this.authenticationGrpcService
      .login({ entity })
      .pipe(pluck('entity'));
  }
}
