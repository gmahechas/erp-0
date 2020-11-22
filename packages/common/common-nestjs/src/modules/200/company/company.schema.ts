import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

import { ICompany } from './company.interface';

export const companySchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
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

export class CompanyDocument extends Document implements ICompany {
  id: string;
  companyName: string;
  companyIdentification: string;
  companyKey: string;
  cityId: string;
}
