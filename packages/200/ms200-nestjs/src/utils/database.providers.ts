import * as mongoose from 'mongoose';

import config from '@ms200/utils/config';

export const databaseProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: async () => {
      try {
        return await mongoose.connect(
          await config.mongodb_uri,
          {
            user: await config.mongodb_user,
            pass: await config.mongodb_pass,
            useNewUrlParser: true,
            useUnifiedTopology: true
          }
        );
      } catch (error) {
        console.log('Error connecting to database')
      }
    }
  },
];