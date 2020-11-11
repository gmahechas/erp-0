import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { ICity } from './city.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class CityDocument extends Document implements Partial<ICity> {
  @Prop() cityName: string;
  @Prop() cityCode: string;
  @Prop() estateId: string;
}

export const CitySchema = SchemaFactory.createForClass(CityDocument);