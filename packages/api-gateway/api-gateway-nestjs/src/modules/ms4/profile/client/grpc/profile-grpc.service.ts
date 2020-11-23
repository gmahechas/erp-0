import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class ProfileGrpcService extends BaseGrpcService(
  '400_PACKAGE',
  'ProfileService',
) {}
