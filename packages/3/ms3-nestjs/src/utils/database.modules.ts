import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import config from '@ms3/utils/config';

export const databasesModules: DynamicModule[] = [
  MongooseModule.forRootAsync({
    useFactory: async () => ({
      uri: await config.mongodb_uri,
      user: await config.mongodb_user,
      pass: await config.mongodb_pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  }),
];
