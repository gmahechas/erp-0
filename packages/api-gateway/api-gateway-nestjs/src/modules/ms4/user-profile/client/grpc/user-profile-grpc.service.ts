import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class UserProfileGrpcService extends BaseGrpcService(
  '400_PACKAGE',
  'UserProfileService',
) {}
