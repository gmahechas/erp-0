import { Schema, Document } from 'mongoose';

import { IEstate } from './estate.interface';

export const estateSchema = new Schema({
  estateName: {
    type: String,
    required: true
  },
  estateCode: {
    type: String,
    required: true
  },
  countryId: {
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

export class EstateDocument extends Document implements Partial<IEstate> {
  estateName: string;
  estateCode: string;
  countryId: string;
}