import { Schema, Document } from 'mongoose';

import { ICompany } from './company.interface';

export const companySchema = new Schema({
  companyName: {
    type: String,
    required: true
  },
  companyIdentification: {
    type: String,
    required: true
  },
  companyKey: {
    type: String,
    required: true
  },
  cityId: {
    type: String,
    require: true
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

export class CompanyDocument extends Document implements Partial<ICompany> {
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}
