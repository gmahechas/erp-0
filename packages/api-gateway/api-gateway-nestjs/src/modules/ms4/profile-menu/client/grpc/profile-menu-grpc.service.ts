import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class ProfileMenuGrpcService extends BaseGrpcService(
  '400_PACKAGE',
  'ProfileMenuService',
) {}
