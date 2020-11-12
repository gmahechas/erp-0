import { Schema, Document } from 'mongoose';

import { IOffice } from './office.interface';

export const officeSchema = new Schema({
  officeName: {
    type: String,
    required: true
  },
  companyId: {
    type: String,
    require: true
  }
}, {
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
    }
  }
});

export class OfficeDocument extends Document implements Partial<IOffice> {
  officeName: string;
  companyId: string;
}