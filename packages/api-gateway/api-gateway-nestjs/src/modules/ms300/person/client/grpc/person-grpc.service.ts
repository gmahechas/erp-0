import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@api-gateway-nestjs/utils/base-grpc.service';

@Injectable()
export class PersonGrpcService extends BaseGrpcService('MS300_PACKAGE', 'PersonService')  { }
