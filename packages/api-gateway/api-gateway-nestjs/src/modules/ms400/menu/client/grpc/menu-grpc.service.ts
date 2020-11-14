import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class MenuGrpcService extends BaseGrpcService('MS400_PACKAGE', 'MenuService')  { }
