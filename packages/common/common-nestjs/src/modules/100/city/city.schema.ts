import { Schema, Document } from 'mongoose';

import { ICity } from './city.interface';

export const citySchema = new Schema({
  cityName: {
    type: String,
    required: true
  },
  cityCode: {
    type: String,
    required: true
  },
  estateId: {
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

export class CityDocument extends Document implements Partial<ICity> {
  cityName: string;
  cityCode: string;
  estateId: string;
}