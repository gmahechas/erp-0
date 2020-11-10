import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class MenuGrpcService extends BaseGrpcService('MS400_PACKAGE', 'MenuService')  { }
