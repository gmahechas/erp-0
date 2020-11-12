import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms300/utils/database.modules';

import { PersonGrpcController } from '@ms300/modules/person/server/grpc/person-grpc.controller';
import { PersonMongodbService } from '@ms300/modules/person/client/mongodb/person-mongodb.service';
import { personProviders } from '@ms300/modules/person/client/mongodb/person.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PersonGrpcController],
  providers: [
    PersonMongodbService,
    ...personProviders
  ]
})
export class PersonModule {}
