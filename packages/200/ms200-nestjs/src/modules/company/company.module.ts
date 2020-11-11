import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { CompanyDocument, CompanySchema } from '@gmahechas/common-nestjs';

import { CompanyGrpcController } from '@ms200/modules/company/server/grpc/company-grpc.controller';
import { CompanyMongodbService } from '@ms200/modules/company/client/mongodb/company-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'company',
        name: CompanyDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = CompanySchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [CompanyGrpcController],
  providers: [CompanyMongodbService],
})
export class CompanyModule {}
