import { Schema, Document } from 'mongoose';

import { ICountry } from './country.interface';

export const countrySchema = new Schema({
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

export class CountryDocument extends Document implements Partial<ICountry> {
  countryName: string;
  countryCode: string;
}