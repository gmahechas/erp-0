import { Injectable } from '@nestjs/common';

import { BaseGrpcService } from '@gmahechas/common-nestjs';

@Injectable()
export class AddressGrpcService extends BaseGrpcService('MS100_PACKAGE', 'AddressService')  { }
