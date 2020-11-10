import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IUser } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class UserDocument extends Document implements Partial<IUser> {
  @Prop() userName: string;
  @Prop() userPassword: string;
  @Prop() personId: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);