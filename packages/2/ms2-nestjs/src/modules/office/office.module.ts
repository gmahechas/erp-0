import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OfficeDocument, officeSchema } from '@gmahechas/common-nestjs';

import { OfficeGrpcController } from '@ms2/modules/office/server/grpc/office-grpc.controller';
import { OfficeMongodbService } from '@ms2/modules/office/client/mongodb/office-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'office',
        name: OfficeDocument.name,
        schema: officeSchema,
      },
    ]),
  ],
  controllers: [OfficeGrpcController],
  providers: [OfficeMongodbService],
})
export class OfficeModule {}
