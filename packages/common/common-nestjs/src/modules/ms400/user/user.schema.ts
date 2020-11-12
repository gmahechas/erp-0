import { Schema, Document } from 'mongoose';

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

export class UserDocument extends Document implements Partial<IUser> {
  userName: string;
  userPassword: string;
  personId: string;
}