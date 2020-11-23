import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  IUser,
  BaseMongodbService,
  UserDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class UserMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(UserDocument.name)
    private readonly entityModel: Model<UserDocument>,
  ) {
    super(entityModel);
  }

  searchMany(data: IEntityMany<IUser>): Observable<IEntityMany<IUser>> {
    const searchManyAsync = async (): Promise<IEntityMany<IUser>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }

  async searchOneByUsername(userName: string): Promise<IUser> {
    return await this.entityModel.findOne({ userName });
  }
}
