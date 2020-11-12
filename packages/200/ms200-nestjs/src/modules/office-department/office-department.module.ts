import { Module } from '@nestjs/common';

import { DatabaseModule } from '@ms200/utils/database.modules';

import { OfficeDepartmentGrpcController } from '@ms200/modules/office-department/server/grpc/office-department-grpc.controller';
import { OfficeDepartmentMongodbService } from '@ms200/modules/office-department/client/mongodb/office-department-mongodb.service';
import { officeDepartmentProviders } from '@ms200/modules/office-department/client/mongodb/office-department.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OfficeDepartmentGrpcController],
  providers: [
    OfficeDepartmentMongodbService,
    ...officeDepartmentProviders
  ]
})
export class OfficeDepartmentModule {}
