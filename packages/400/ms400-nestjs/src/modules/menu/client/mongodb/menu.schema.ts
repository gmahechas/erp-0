import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { IMenu } from '@gmahechas/common-nestjs';

@Schema({
  versionKey: false,
  toObject: {
    transform(doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
    }
  }
})
export class MenuDocument extends Document implements Partial<IMenu> {
  @Prop() menuName: string;
  @Prop() menuDescription: string;
  @Prop() menuUri: string;
  @Prop() menuOrder: number;
  @Prop() menuIdParent: string;
}

export const MenuSchema = SchemaFactory.createForClass(MenuDocument);