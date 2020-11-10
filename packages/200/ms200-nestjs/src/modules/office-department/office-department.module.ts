import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { OfficeDepartmentDocument, OfficeDepartmentSchema } from '@ms200/modules/office-department/client/mongodb/office-department.schema';

import { OfficeDepartmentGrpcController } from '@ms200/modules/office-department/server/grpc/office-department-grpc.controller';
import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'officeDepartment',
        name: OfficeDepartmentDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = OfficeDepartmentSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [OfficeDepartmentGrpcController],
  providers: [OfficeDepartmentMongodbService]
})
export class OfficeDepartmentModule {}
