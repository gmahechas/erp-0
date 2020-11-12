import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IMenu , BaseMongodbService, MenuDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class MenuMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(MenuDocument.name) private readonly entityModel: Model<MenuDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IMenu>): Observable<IEntityMany<IMenu>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IMenu>): Promise<IEntityMany<IMenu>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
