import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class OfficeDepartmentGrpcService extends BaseGrpcService('200_PACKAGE', 'OfficeDepartmentService') { }
