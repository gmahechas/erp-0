import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms200/utils/database.modules';

import { CompanyGrpcController } from '@ms200/modules/company/server/grpc/company-grpc.controller';
import { CompanyMongodbService } from '@ms200/modules/company/client/mongodb/company-mongodb.service';
import { companyProviders } from '@ms200/modules/company/client/mongodb/company.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyGrpcController],
  providers: [
    CompanyMongodbService,
    ...companyProviders
  ],
})
export class CompanyModule {}
