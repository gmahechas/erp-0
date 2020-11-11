import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IProfileMenu } from './profile-menu.interface';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class ProfileMenuDocument extends Document implements Partial<IProfileMenu> {
  @Prop() profileMenuStatus: boolean;
  @Prop() menuId: string;
  @Prop() profileId: string;
}

export const ProfileMenuSchema = SchemaFactory.createForClass(ProfileMenuDocument);