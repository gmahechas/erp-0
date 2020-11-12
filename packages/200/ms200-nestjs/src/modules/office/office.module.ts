import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms200/utils/database.modules';

import { OfficeGrpcController } from '@ms200/modules/office/server/grpc/office-grpc.controller';
import { OfficeMongodbService } from '@ms200/modules/office/client/mongodb/office-mongodb.service';
import { officeProviders } from '@ms200/modules/office/client/mongodb/office.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OfficeGrpcController],
  providers: [
    OfficeMongodbService,
    ...officeProviders
  ]
})
export class OfficeModule {}
