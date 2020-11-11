import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IUserProfile } from './user-profile.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class UserProfileDocument extends Document implements Partial<IUserProfile> {
  @Prop() userProfileStatus: boolean;
  @Prop() userId: string;
  @Prop() profileId: string;
}

export const UserProfileSchema = SchemaFactory.createForClass(UserProfileDocument);