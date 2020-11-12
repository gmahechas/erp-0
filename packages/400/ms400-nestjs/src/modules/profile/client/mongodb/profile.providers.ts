import { Connection } from 'mongoose';

import { profileSchema, ProfileDocument } from '@gmahechas/common-nestjs';

export const profileProviders = [
  {
    provide: ProfileDocument.name,
    useFactory: (connection: Connection) => connection.model('Profile', profileSchema, 'profile'),
    inject: ['MONGODB_CONNECTION']
  }
];