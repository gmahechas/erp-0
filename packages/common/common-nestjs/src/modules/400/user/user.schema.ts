import { Schema, Document } from 'mongoose';
import { Password } from '../../../utils/password';

import { IUser } from './user.interface';

export const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userPassword: {
    type: String,
    required: true
  },
  personId: {
    type: String,
    required: true
  }
}, {
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    }
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('userPassword')) {
    const hashed = await Password.toHash(this.get('userPassword'));
    this.set('userPassword', hashed);
  }
  next();
});

export class UserDocument extends Document implements Partial<IUser> {
  userName: string;
  userPassword: string;
  personId: string;
}