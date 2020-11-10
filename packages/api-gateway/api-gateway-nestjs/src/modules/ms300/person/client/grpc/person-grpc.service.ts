import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class PersonGrpcService extends BaseGrpcService('MS300_PACKAGE', 'PersonService')  { }
