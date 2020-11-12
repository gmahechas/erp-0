import { Connection } from 'mongoose';

import { typeIdentificationSchema, TypeIdentificationDocument } from '@gmahechas/common-nestjs';

export const typeIdentificationProviders = [
  {
    provide: TypeIdentificationDocument.name,
    useFactory: (connection: Connection) => connection.model('TypeIdentification', typeIdentificationSchema, 'typeIdentification'),
    inject: ['MONGODB_CONNECTION']
  },
];