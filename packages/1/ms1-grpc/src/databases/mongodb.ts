import mongosee from 'mongoose';
import { config } from '../utils/config';

export default async () => {
  try {
    await mongosee.connect(await config.mongodb_uri, {
      user: await config.mongodb_user,
      pass: await config.mongodb_pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('successful connection')
  } catch (error) {
    console.log('error connecting to database:::', error);
  }
}