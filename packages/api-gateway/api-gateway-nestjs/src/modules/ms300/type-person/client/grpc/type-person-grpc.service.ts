import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class TypePersonGrpcService extends BaseGrpcService('MS300_PACKAGE', 'TypePersonService') { }
