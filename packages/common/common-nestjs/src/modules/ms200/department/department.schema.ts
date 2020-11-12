import { Schema, Document } from 'mongoose';

import { IDepartment } from './department.interface';

export const departmentSchema = new Schema({
  departmentName: {
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

export class DepartmentDocument extends Document implements Partial<IDepartment> {
  departmentName: string;
  companyId: string;
}