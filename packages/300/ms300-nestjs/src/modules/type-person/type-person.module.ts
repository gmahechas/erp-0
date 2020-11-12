import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms300/utils/database.modules';

import { TypePersonGrpcController } from '@ms300/modules/type-person/server/grpc/type-person-grpc.controller';
import { TypePersonMongodbService } from '@ms300/modules/type-person/client/mongodb/type-person-mongodb.service';
import { typePersonProviders } from '@ms300/modules/type-person/client/mongodb/type-person.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TypePersonGrpcController],
  providers: [
    TypePersonMongodbService,
    ...typePersonProviders
  ]
})
export class TypePersonModule {}
