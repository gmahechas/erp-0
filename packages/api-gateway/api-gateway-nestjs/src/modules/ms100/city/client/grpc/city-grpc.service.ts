import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class CityGrpcService extends BaseGrpcService('MS100_PACKAGE', 'CityService')  { }
