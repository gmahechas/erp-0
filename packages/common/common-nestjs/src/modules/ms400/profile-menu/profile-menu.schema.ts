import { Schema, Document } from 'mongoose';

import { IProfileMenu } from './profile-menu.interface';

export const profileMenuSchema = new Schema({
  profileMenuStatus: {
    type: Boolean,
    required: true
  },
  menuId: {
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

export class ProfileMenuDocument extends Document implements Partial<IProfileMenu> {
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}