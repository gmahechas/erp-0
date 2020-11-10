import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class EstateGrpcService extends BaseGrpcService('MS100_PACKAGE', 'EstateService')  { }