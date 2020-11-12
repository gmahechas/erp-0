import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms300/utils/database.modules';

import { TypeIdentificationGrpcController } from '@ms300/modules/type-identification/server/grpc/type-identification-grpc.controller';
import { TypeIdentificationMongodbService } from '@ms300/modules/type-identification/client/mongodb/type-identification-mongodb.service';
import { typeIdentificationProviders } from '@ms300/modules/type-identification/client/mongodb/type-identification.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeIdentificationGrpcController],
  providers: [
    TypeIdentificationMongodbService,
    ...typeIdentificationProviders
  ]
})
export class TypeIdentificationModule {}
