import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IOffice } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class OfficeDocument extends Document implements Partial<IOffice> {
  @Prop() officeName: string;
  @Prop() companyId: string;
  @Prop() addressId: string;
}

export const OfficeSchema = SchemaFactory.createForClass(OfficeDocument);