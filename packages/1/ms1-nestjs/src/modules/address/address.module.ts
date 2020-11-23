import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AddressDocument, addressSchema } from '@gmahechas/common-nestjs';

import { AddressGrpcController } from '@ms1/modules/address/server/grpc/address-grpc.controller';
import { AddressMongodbService } from '@ms1/modules/address/client/mongodb/address-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'address',
        name: AddressDocument.name,
        schema: addressSchema,
      },
    ]),
  ],
  controllers: [AddressGrpcController],
  providers: [AddressMongodbService],
})
export class AddressModule {}
