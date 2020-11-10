import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ITypeIdentification } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class TypeIdentificationDocument extends Document implements Partial<ITypeIdentification> {
  @Prop() typeIdentificationDescription: string;
  @Prop() typeIdentificationCode: string;
}

export const TypeIdentificationSchema = SchemaFactory.createForClass(TypeIdentificationDocument);