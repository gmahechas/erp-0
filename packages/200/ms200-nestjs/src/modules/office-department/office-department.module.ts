import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OfficeDepartmentDocument, officeDepartmentSchema } from '@gmahechas/common-nestjs';

import { OfficeDepartmentGrpcController } from '@ms200/modules/office-department/server/grpc/office-department-grpc.controller';
import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        collection: 'officeDepartment',
        name: OfficeDepartmentDocument.name,
        schema: officeDepartmentSchema
      }
    ])
  ],
  controllers: [OfficeDepartmentGrpcController],
  providers: [OfficeDepartmentMongodbService]
})
export class OfficeDepartmentModule { }
