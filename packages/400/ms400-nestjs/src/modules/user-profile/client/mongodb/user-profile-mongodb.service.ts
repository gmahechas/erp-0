import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IUserProfile , BaseMongodbService, UserProfileDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class UserProfileMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(UserProfileDocument.name) private readonly entityModel: Model<UserProfileDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IUserProfile>): Observable<IEntityMany<IUserProfile>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IUserProfile>): Promise<IEntityMany<IUserProfile>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
