import { Connection } from 'mongoose';

import { officeSchema, OfficeDocument } from '@gmahechas/common-nestjs';

export const officeProviders = [
  {
    provide: OfficeDocument.name,
    useFactory: (connection: Connection) => connection.model('Office', officeSchema, 'office'),
    inject: ['MONGODB_CONNECTION'],

  },
];