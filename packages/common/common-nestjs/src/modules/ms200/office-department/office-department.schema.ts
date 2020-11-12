import { Schema, Document } from 'mongoose';

import { IOfficeDepartment } from './office-department.interface';

export const officeDepartmentSchema = new Schema({
  officeDepartmentStatus: {
    type: Boolean,
    required: true
  },
  officeId: {
    type: String,
    require: true
  },
  departmentId: {
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

export class OfficeDepartmentDocument extends Document implements Partial<IOfficeDepartment> {
  officeDepartmentStatus: boolean;
  officeId: string;
  departmentId: string;
}
