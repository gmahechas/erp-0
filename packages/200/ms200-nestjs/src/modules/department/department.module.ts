import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms200/utils/database.modules';

import { DepartmentGrpcController } from '@ms200/modules/department/server/grpc/department-grpc.controller';
import { DepartmentMongodbService } from '@ms200/modules/department/client/mongodb/department-mongodb.service';
import { departmentProviders } from '@ms200/modules/department/client/mongodb/department.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentGrpcController],
  providers: [
    DepartmentMongodbService,
    ...departmentProviders
  ]
})
export class DepartmentModule {}
