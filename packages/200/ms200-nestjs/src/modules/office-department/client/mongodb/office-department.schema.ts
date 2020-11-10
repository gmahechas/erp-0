import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IOfficeDepartment } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class OfficeDepartmentDocument extends Document implements Partial<IOfficeDepartment> {
  @Prop() officeDepartmentStatus: boolean;
  @Prop() officeId: string;
  @Prop() departmentId: string;
}

export const OfficeDepartmentSchema = SchemaFactory.createForClass(OfficeDepartmentDocument);