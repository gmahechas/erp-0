import { Connection } from 'mongoose';

import { menuSchema, MenuDocument } from '@gmahechas/common-nestjs';

export const menuProviders = [
  {
    provide: MenuDocument.name,
    useFactory: (connection: Connection) => connection.model('Menu', menuSchema, 'menu'),
    inject: ['MONGODB_CONNECTION']
  },
];