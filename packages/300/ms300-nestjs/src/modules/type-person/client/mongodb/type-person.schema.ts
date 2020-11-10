import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ITypePerson } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class TypePersonDocument extends Document implements Partial<ITypePerson> {
  @Prop() typePersonDescription: string;
  @Prop() typePersonCode: string;
}

export const TypePersonSchema = SchemaFactory.createForClass(TypePersonDocument);