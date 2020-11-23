import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { ITypePerson } from './type-person.interface';

export const typePersonSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  typePersonDescription: {
    type: String,
    required: true
  },
  typePersonCode: {
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

export class TypePersonDocument extends Document implements ITypePerson {
  id: string;
  typePersonDescription: string;
  typePersonCode: string;
}