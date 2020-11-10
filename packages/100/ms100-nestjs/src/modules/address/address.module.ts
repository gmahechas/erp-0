import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { AddressDocument, AddressSchema } from '@ms100/modules/address/client/mongodb/address.schema';

import { AddressGrpcController } from '@ms100/modules/address/server/grpc/address-grpc.controller';
import { AddressMongodbService } from '@ms100/modules/address/client/mongodb/address-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'address',
        name: AddressDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = AddressSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [AddressGrpcController],
  providers: [AddressMongodbService]
})
export class AddressModule { }
