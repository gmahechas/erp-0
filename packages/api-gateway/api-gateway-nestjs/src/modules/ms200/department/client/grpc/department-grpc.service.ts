import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class DepartmentGrpcService extends BaseGrpcService('MS200_PACKAGE', 'DepartmentService') { }
