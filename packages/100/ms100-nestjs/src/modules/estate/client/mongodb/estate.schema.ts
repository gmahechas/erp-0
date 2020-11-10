import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IEstate } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class EstateDocument extends Document implements Partial<IEstate> {
  @Prop() estateName: string;
  @Prop() estateCode: string;
  @Prop() countryId: string;
}

export const EstateSchema = SchemaFactory.createForClass(EstateDocument);