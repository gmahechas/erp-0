import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class OfficeGrpcService extends BaseGrpcService('MS200_PACKAGE', 'OfficeService') { }
