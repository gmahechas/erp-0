import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class DepartmentGrpcService extends BaseGrpcService('MS200_PACKAGE', 'DepartmentService') { }
