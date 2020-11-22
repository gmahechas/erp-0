import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { ICountry } from './country.interface';

export const countrySchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  countryName: {
    type: String,
    required: true
  },
  countryCode: {
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

export class CountryDocument extends Document implements ICountry {
  id: string;
  countryName: string;
  countryCode: string;
}