import { Connection } from 'mongoose';

import { userSchema, UserDocument } from '@gmahechas/common-nestjs';

export const userProviders = [
  {
    provide: UserDocument.name,
    useFactory: (connection: Connection) => connection.model('User', userSchema, 'user'),
    inject: ['MONGODB_CONNECTION']
  }
];