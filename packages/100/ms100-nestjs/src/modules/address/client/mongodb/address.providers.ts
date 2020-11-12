import { Connection } from 'mongoose';

import { addressSchema } from '@gmahechas/common-nestjs';

export const addressProviders = [
  {
    provide: 'ADDRESS_MODEL',
    useFactory: (connection: Connection) => connection.model('Address', addressSchema, 'address'),
    inject: ['MONGODB_CONNECTION'],

  },
];