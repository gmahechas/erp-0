import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class CityGrpcService extends BaseGrpcService('MS100_PACKAGE', 'CityService')  { }
