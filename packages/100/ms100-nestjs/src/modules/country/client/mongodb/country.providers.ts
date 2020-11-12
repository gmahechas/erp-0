import { Connection } from 'mongoose';

import { countrySchema } from '@gmahechas/common-nestjs';

export const countryProviders = [
  {
    provide: 'COUNTRY_MODEL',
    useFactory: (connection: Connection) => connection.model('Country', countrySchema, 'country'),
    inject: ['MONGODB_CONNECTION'],
  },
];