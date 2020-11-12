import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms100/utils/database.modules';

import { CityGrpcController } from '@ms100/modules/city/server/grpc/city-grpc.controller';
import { CityMongodbService } from '@ms100/modules/city/client/mongodb/city-mongodb.service';
import { cityProviders } from '@ms100/modules/city/client/mongodb/city.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CityGrpcController],
  providers: [
    CityMongodbService,
    ...cityProviders
  ],
})
export class CityModule { }
