import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class OfficeDepartmentGrpcService extends BaseGrpcService('MS200_PACKAGE', 'OfficeDepartmentService') { }
