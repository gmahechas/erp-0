import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { ITypeIdentification } from './type-identification.interface';

export const typeIdentificationSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  typeIdentificationDescription: {
    type: String,
    required: true
  },
  typeIdentificationCode: {
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

export class TypeIdentificationDocument extends Document implements ITypeIdentification {
  id: string;
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}