import { Connection } from 'mongoose';

import { citySchema } from '@gmahechas/common-nestjs';

export const cityProviders = [
  {
    provide: 'CITY_MODEL',
    useFactory: (connection: Connection) => connection.model('City', citySchema, 'city'),
    inject: ['MONGODB_CONNECTION'],

  },
];