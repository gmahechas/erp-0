import { Connection } from 'mongoose';

import { officeDepartmentSchema, OfficeDepartmentDocument } from '@gmahechas/common-nestjs';

export const officeDepartmentProviders = [
  {
    provide: OfficeDepartmentDocument.name,
    useFactory: (connection: Connection) => connection.model('OfficeDepartment', officeDepartmentSchema, 'officeDepartment'),
    inject: ['MONGODB_CONNECTION']
  },
];