import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class OfficeDepartmentGrpcService extends BaseGrpcService('MS200_PACKAGE', 'OfficeDepartmentService') { }
