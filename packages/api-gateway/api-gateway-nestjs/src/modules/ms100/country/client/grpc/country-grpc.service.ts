import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class CountryGrpcService extends BaseGrpcService('MS100_PACKAGE', 'CountryService')  { }