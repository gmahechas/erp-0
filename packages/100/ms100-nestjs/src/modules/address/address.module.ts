import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms100/utils/database.modules';

import { AddressGrpcController } from '@ms100/modules/address/server/grpc/address-grpc.controller';
import { AddressMongodbService } from '@ms100/modules/address/client/mongodb/address-mongodb.service';
import { addressProviders } from '@ms100/modules/address/client/mongodb/address.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressGrpcController],
  providers: [
    AddressMongodbService,
    ...addressProviders
  ]
})
export class AddressModule { }
