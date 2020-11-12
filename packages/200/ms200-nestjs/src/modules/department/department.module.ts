import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DepartmentDocument, departmentSchema } from '@gmahechas/common-nestjs';

import { DepartmentGrpcController } from '@ms200/modules/department/server/grpc/department-grpc.controller';
import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'department',
        name: DepartmentDocument.name,
        schema: departmentSchema
      }
    ])
  ],
  controllers: [DepartmentGrpcController],
  providers: [DepartmentMongodbService]
})
export class DepartmentModule { }
