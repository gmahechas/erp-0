import { Connection } from 'mongoose';

import { citySchema, CityDocument } from '@gmahechas/common-nestjs';

export const cityProviders = [
  {
    provide: CityDocument.name,
    useFactory: (connection: Connection) => connection.model('City', citySchema, 'city'),
    inject: ['MONGODB_CONNECTION'],

  },
];