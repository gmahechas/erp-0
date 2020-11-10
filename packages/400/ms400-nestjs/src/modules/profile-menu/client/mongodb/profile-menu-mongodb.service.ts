import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { ProfileMenuDocument } from '@ms400/modules/profile-menu/client/mongodb/profile-menu.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IProfileMenu , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMenuMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(ProfileMenuDocument.name) private readonly entityModel: Model<ProfileMenuDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IProfileMenu>): Observable<IEntityMany<IProfileMenu>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IProfileMenu>): Promise<IEntityMany<IProfileMenu>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
