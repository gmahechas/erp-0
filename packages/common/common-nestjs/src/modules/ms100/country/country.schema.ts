import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ICountry } from './country.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class CountryDocument extends Document implements Partial<ICountry> {
  @Prop() countryName: string;
  @Prop() countryCode: string;
}

export const CountrySchema = SchemaFactory.createForClass(CountryDocument);