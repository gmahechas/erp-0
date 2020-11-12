import { Connection } from 'mongoose';

import { typePersonSchema, TypePersonDocument } from '@gmahechas/common-nestjs';

export const typePersonProviders = [
  {
    provide: TypePersonDocument.name,
    useFactory: (connection: Connection) => connection.model('TypePerson', typePersonSchema, 'typePerson'),
    inject: ['MONGODB_CONNECTION']
  },
];