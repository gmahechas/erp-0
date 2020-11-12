import { Connection } from 'mongoose';

import { userProfileSchema, UserProfileDocument } from '@gmahechas/common-nestjs';

export const userProfileProviders = [
  {
    provide: UserProfileDocument.name,
    useFactory: (connection: Connection) => connection.model('UserProfile', userProfileSchema, 'userProfile'),
    inject: ['MONGODB_CONNECTION']
  }
];