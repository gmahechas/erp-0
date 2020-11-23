import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { ICity } from './city.interface';

export const citySchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
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

export class CityDocument extends Document implements ICity {
  id: string;
  cityName: string;
  cityCode: string;
  estateId: string;
}