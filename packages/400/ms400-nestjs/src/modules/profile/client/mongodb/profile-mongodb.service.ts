import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IProfile , BaseMongodbService, ProfileDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(ProfileDocument.name) private readonly entityModel: Model<ProfileDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IProfile>): Observable<IEntityMany<IProfile>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IProfile>): Promise<IEntityMany<IProfile>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}

