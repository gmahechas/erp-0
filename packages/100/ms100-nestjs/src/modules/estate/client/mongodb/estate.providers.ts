import { Connection } from 'mongoose';

import { estateSchema } from '@gmahechas/common-nestjs';

export const estateProviders = [
  {
    provide: 'ESTATE_MODEL',
    useFactory: (connection: Connection) => connection.model('Estate', estateSchema, 'estate'),
    inject: ['MONGODB_CONNECTION'],

  },
];