import { Schema, Document } from 'mongoose';

import { IAddress } from './address.interface';

export const addressSchema = new Schema({
  addressLine1: {
    type: String,
    required: true
  },
  addressLine2: {
    type: String
  },
  addressZipCode: {
    type: String
  },
  cityId: {
    type: String,
    require: true
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

export class AddressDocument extends Document implements Partial<IAddress> {
  addressLine1: string;
  addressLine2: string;
  addressZipCode: string;
  cityId: string;
}