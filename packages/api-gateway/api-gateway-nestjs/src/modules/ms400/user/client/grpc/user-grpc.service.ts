import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class UserGrpcService extends BaseGrpcService('MS400_PACKAGE', 'UserService')  { }
