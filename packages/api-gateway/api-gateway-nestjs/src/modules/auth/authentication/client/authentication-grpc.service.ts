import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  IAuthService,
  IEntityOne,
  ILoginRequest,
  ILoginResponse,
  grpcErrors,
} from '@gmahechas/common-nestjs';

@Injectable()
export class AuthenticationGrpcService {
  private grpcService: IAuthService;

  constructor(
    @Inject('AUTH_PACKAGE') private readonly grpcClient: ClientGrpc,
  ) {}

  onModuleInit() {
    this.grpcService = this.grpcClient.getService<IAuthService>(
      'AuthenticationService',
    );
  }

  login(
    data: IEntityOne<ILoginRequest>,
  ): Observable<IEntityOne<ILoginResponse>> {
    return this.grpcService
      .login(data)
      .pipe(catchError((error) => throwError(grpcErrors(error.code))));
  }
}
