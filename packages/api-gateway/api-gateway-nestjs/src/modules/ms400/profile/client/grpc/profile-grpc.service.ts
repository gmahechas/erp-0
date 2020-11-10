import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileGrpcService extends BaseGrpcService('MS400_PACKAGE', 'ProfileService')  { }
