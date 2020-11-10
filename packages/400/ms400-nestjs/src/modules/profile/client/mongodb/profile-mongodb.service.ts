import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { ProfileDocument } from '@ms400/modules/profile/client/mongodb/profile.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IProfile , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(ProfileDocument.name) private readonly entityModel: Model<ProfileDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IProfile>): Observable<IEntityMany<IProfile>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IProfile>): Promise<IEntityMany<IProfile>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}

