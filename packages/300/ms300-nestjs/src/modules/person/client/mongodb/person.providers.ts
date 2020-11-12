import { Connection } from 'mongoose';

import { personSchema, PersonDocument } from '@gmahechas/common-nestjs';

export const personProviders = [
  {
    provide: PersonDocument.name,
    useFactory: (connection: Connection) => connection.model('Person', personSchema, 'person'),
    inject: ['MONGODB_CONNECTION']
  },
];