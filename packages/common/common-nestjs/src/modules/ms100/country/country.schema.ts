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
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
});

export class CountryDocument extends Document implements Partial<ICountry> {
  countryName: string;
  countryCode: string;
}