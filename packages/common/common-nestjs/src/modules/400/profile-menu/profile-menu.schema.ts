import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IProfileMenu } from './profile-menu.interface';

export const profileMenuSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
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

export class ProfileMenuDocument extends Document implements IProfileMenu {
  id: string;
  profileMenuStatus: boolean;
  menuId: string;
  profileId: string;
}