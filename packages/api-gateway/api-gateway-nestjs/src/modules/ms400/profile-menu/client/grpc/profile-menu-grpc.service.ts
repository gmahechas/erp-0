import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class ProfileMenuGrpcService extends BaseGrpcService('MS400_PACKAGE', 'ProfileMenuService')  { }
