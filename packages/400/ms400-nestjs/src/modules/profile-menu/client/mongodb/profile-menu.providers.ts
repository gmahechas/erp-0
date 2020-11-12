import { Connection } from 'mongoose';

import { profileMenuSchema, ProfileMenuDocument } from '@gmahechas/common-nestjs';

export const profileMenuProviders = [
  {
    provide: ProfileMenuDocument.name,
    useFactory: (connection: Connection) => connection.model('ProfileMenu', profileMenuSchema, 'profileMenu'),
    inject: ['MONGODB_CONNECTION']
  }
];