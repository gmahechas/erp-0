import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms100/utils/database.modules';

import { EstateGrpcController } from '@ms100/modules/estate/server/grpc/estate-grpc.controller';
import { EstateMongodbService } from '@ms100/modules/estate/client/mongodb/estate-mongodb.service';
import { estateProviders } from '@ms100/modules/estate/client/mongodb/estate.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EstateGrpcController],
  providers: [
    EstateMongodbService,
    ...estateProviders
  ]
})
export class EstateModule { }
