import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class TypeIdentificationGrpcService extends BaseGrpcService('MS300_PACKAGE', 'TypeIdentificationService') { }
