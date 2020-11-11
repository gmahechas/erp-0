import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IDepartment } from './department.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class DepartmentDocument extends Document implements Partial<IDepartment> {
  @Prop() departmentName: string;
  @Prop() companyId: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(DepartmentDocument);