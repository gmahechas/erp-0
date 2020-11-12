import { Connection } from 'mongoose';

import { addressSchema, AddressDocument } from '@gmahechas/common-nestjs';

export const addressProviders = [
  {
    provide: AddressDocument.name,
    useFactory: (connection: Connection) => connection.model('Address', addressSchema, 'address'),
    inject: ['MONGODB_CONNECTION'],

  },
];