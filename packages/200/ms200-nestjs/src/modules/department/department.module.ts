import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaDefinition } from 'mongoose';

import { DepartmentDocument, DepartmentSchema } from '@ms200/modules/department/client/mongodb/department.schema';

import { DepartmentGrpcController } from '@ms200/modules/department/server/grpc/department-grpc.controller';
import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        collection: 'department',
        name: DepartmentDocument.name,
        useFactory: (): SchemaDefinition => {
          const schema = DepartmentSchema;
          return schema;
        }
      }
    ])
  ],
  controllers: [DepartmentGrpcController],
  providers: [DepartmentMongodbService]
})
export class DepartmentModule {}
