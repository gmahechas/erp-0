import { Schema, Document } from 'mongoose';

import { ITypeIdentification } from './type-identification.interface';

export const typeIdentificationSchema = new Schema({
  typeIdentificationDescription: {
    type: String,
    required: true
  },
  typeIdentificationCode: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
});

export class TypeIdentificationDocument extends Document implements Partial<ITypeIdentification> {
  typeIdentificationDescription: string;
  typeIdentificationCode: string;
}