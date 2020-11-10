import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { UserDocument } from '@ms400/modules/user/client/mongodb/user.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IUser , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class UserMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(UserDocument.name) private readonly entityModel: Model<UserDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IUser>): Observable<IEntityMany<IUser>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IUser>): Promise<IEntityMany<IUser>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
