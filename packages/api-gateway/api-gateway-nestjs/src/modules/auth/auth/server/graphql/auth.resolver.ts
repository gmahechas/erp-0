import { ISigninResponse } from '@gmahechas/common-nestjs';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthGrpcService } from '../../client/grpc/auth-grpc.service';
import { SigninRequestInput } from './auth.input';
import { AuthSigninResponseType } from './auth.type';

@Resolver()
export class AuthResolver {
  constructor(private authGrpcService: AuthGrpcService) {}

  @Query(() => AuthSigninResponseType)
  async signin(
    @Args('data', { type: () => SigninRequestInput }) data: ISigninResponse,
  ) {
    console.log(data);
    return this.authGrpcService.signin(data);
  }
}
