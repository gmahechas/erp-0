import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IProfile } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class ProfileDocument extends Document implements Partial<IProfile> {
  @Prop() profileName: string;
  @Prop() profileDescription: string;
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileDocument);