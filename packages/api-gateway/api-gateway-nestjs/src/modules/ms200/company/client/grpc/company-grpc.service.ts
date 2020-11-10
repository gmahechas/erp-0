import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class CompanyGrpcService extends BaseGrpcService('MS200_PACKAGE', 'CompanyService') { }