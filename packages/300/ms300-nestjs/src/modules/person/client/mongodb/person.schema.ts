import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IPerson } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class PersonDocument extends Document implements Partial<IPerson> {
  @Prop() personFirstName: string;
  @Prop() personSecondName: string;
  @Prop() personFirstSurname: string;
  @Prop() personSecondSurname: string;
  @Prop() personCompanyName: string;
  @Prop() companyId: string;
  @Prop() typePersonId: string;
  @Prop() typeIdentificationId: string;
}

export const PersonSchema = SchemaFactory.createForClass(PersonDocument);