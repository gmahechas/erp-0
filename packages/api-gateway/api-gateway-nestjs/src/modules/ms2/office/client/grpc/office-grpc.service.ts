import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class OfficeGrpcService extends BaseGrpcService(
  '200_PACKAGE',
  'OfficeService',
) {}
