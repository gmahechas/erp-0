import { Schema, Document } from 'mongoose';

import { IMenu } from './menu.interface';

export const menuSchema = new Schema({
  menuName: {
    type: String,
    required: true
  },
  menuDescription: {
    type: String
  },
  menuUri: {
    type: String
  },
  menuOrder: {
    type: Number
  },
  menuIdParent: {
    type: String
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

export class MenuDocument extends Document implements Partial<IMenu> {
  menuName: string;
  menuDescription: string;
  menuUri: string;
  menuOrder: number;
  menuIdParent: string;
}
