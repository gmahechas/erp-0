import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ICompany } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class CompanyDocument extends Document implements Partial<ICompany> {
  @Prop() companyName: string;
  @Prop() companyIdentification: string;
  @Prop() companyKey: string;
  @Prop() cityId: string;
  @Prop() addressId: string;
}

export const CompanySchema = SchemaFactory.createForClass(CompanyDocument);