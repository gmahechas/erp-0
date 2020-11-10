import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class TypePersonGrpcService extends BaseGrpcService('MS300_PACKAGE', 'TypePersonService') { }
