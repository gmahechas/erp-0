import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IProfileMenu , BaseMongodbService, ProfileMenuDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMenuMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(ProfileMenuDocument.name) private readonly entityModel: Model<ProfileMenuDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IProfileMenu>): Observable<IEntityMany<IProfileMenu>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IProfileMenu>): Promise<IEntityMany<IProfileMenu>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
