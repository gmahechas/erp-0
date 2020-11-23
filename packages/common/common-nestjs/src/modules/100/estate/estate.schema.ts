import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { IEstate } from './estate.interface';

export const estateSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
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
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    }
  }
});

export class EstateDocument extends Document implements IEstate {
  id: string;
  estateName: string;
  estateCode: string;
  countryId: string;
}