import { Connection } from 'mongoose';

import { departmentSchema, DepartmentDocument } from '@gmahechas/common-nestjs';

export const departmentProviders = [
  {
    provide: DepartmentDocument.name,
    useFactory: (connection: Connection) => connection.model('Department', departmentSchema, 'department'),
    inject: ['MONGODB_CONNECTION']
  },
];