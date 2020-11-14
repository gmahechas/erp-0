import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class TypeIdentificationGrpcService extends BaseGrpcService('MS300_PACKAGE', 'TypeIdentificationService') { }
