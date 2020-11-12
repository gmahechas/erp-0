import { Connection } from 'mongoose';

import { estateSchema, EstateDocument } from '@gmahechas/common-nestjs';

export const estateProviders = [
  {
    provide: EstateDocument.name,
    useFactory: (connection: Connection) => connection.model('Estate', estateSchema, 'estate'),
    inject: ['MONGODB_CONNECTION'],

  },
];