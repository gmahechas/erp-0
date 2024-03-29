import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class UserGrpcService extends BaseGrpcService(
  'AUTH_PACKAGE',
  'UserService',
) {}
