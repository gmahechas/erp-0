import { ISigninRequest, ISigninResponse } from '@gmahechas/common-nestjs';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

export interface IAuthService {
  signin(data: ISigninRequest): Promise<ISigninResponse>;
}
@Injectable()
export class AuthGrpcService implements OnModuleInit {
  private authService: IAuthService;

  constructor(@Inject('AUTH_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.client.getService<IAuthService>('AuthService');
  }

  async signin(data: any) {
    return await this.authService.signin(data);
  }
}
