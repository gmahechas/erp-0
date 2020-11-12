import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IUser , BaseMongodbService, UserDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class UserMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(UserDocument.name) private readonly entityModel: Model<UserDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IUser>): Observable<IEntityMany<IUser>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IUser>): Promise<IEntityMany<IUser>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
