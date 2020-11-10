import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { UserProfileDocument } from '@ms400/modules/user-profile/client/mongodb/user-profile.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IUserProfile , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class UserProfileMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(UserProfileDocument.name) private readonly entityModel: Model<UserProfileDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IUserProfile>): Observable<IEntityMany<IUserProfile>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IUserProfile>): Promise<IEntityMany<IUserProfile>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
