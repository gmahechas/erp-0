import { Connection } from 'mongoose';

import { countrySchema, CountryDocument } from '@gmahechas/common-nestjs';

export const countryProviders = [
  {
    provide: CountryDocument.name,
    useFactory: (connection: Connection) => connection.model('Country', countrySchema, 'country'),
    inject: ['MONGODB_CONNECTION'],
  },
];