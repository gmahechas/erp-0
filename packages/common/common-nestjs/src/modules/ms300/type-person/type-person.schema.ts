import { Schema, Document } from 'mongoose';

import { ITypePerson } from './type-person.interface';

export const typePersonSchema = new Schema({
  typePersonDescription: {
    type: String,
    required: true
  },
  typePersonCode: {
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

export class TypePersonDocument extends Document implements Partial<ITypePerson> {
  typePersonDescription: string;
  typePersonCode: string;
}