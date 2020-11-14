import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class CountryGrpcService extends BaseGrpcService('MS100_PACKAGE', 'CountryService')  { }