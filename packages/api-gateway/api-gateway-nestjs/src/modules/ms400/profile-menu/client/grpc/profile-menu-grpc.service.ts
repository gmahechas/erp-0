import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMenuGrpcService extends BaseGrpcService('MS400_PACKAGE', 'ProfileMenuService')  { }
