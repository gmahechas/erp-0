import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CompanyDocument, companySchema } from '@gmahechas/common-nestjs';

import { CompanyGrpcController } from '@ms200/modules/company/server/grpc/company-grpc.controller';
import { CompanyMongodbService } from '@ms200/modules/company/client/mongodb/company-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'company',
        name: CompanyDocument.name,
        schema: companySchema
      }
    ])
  ],
  controllers: [CompanyGrpcController],
  providers: [CompanyMongodbService],
})
export class CompanyModule { }
