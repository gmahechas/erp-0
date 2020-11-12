import { Schema, Document } from 'mongoose';

import { IProfile } from './profile.interface';

export const profileSchema = new Schema({
  profileName: {
    type: String,
    required: true
  },
  profileDescription: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    }
  }
});

export class ProfileDocument extends Document implements Partial<IProfile> {
  profileName: string;
  profileDescription: string;
}