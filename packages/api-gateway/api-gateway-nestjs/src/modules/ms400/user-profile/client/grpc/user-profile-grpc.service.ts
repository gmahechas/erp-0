import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class UserProfileGrpcService extends BaseGrpcService('MS400_PACKAGE', 'UserProfileService')  { }
