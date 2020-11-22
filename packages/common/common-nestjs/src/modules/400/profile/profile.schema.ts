import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IProfile } from './profile.interface';

export const profileSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  profileName: {
    type: String,
    required: true
  },
  profileDescription: {
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

export class ProfileDocument extends Document implements IProfile {
  id: string;
  profileName: string;
  profileDescription: string;
}