import { Schema, Document } from 'mongoose';

import { IUserProfile } from './user-profile.interface';

export const userProfileSchema = new Schema({
  userProfileStatus: {
    type: Boolean,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  profileId: {
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

export class UserProfileDocument extends Document implements Partial<IUserProfile> {
  userProfileStatus: boolean;
  userId: string;
  profileId: string;
}