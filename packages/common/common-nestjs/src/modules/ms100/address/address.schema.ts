import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IAddress } from './address.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class AddressDocument extends Document implements Partial<IAddress> {
  @Prop() addressLine1: string;
  @Prop() addressLine2: string;
  @Prop() addressZipCode: string;
  @Prop() addressFullName: string;
  @Prop() addressPhone: string;
  @Prop() cityId: string;
}

export const AddressSchema = SchemaFactory.createForClass(AddressDocument);