import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, ICity, BaseMongodbService, CityDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class CityMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(CityDocument.name) private readonly entityModel: Model<CityDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ICity>): Observable<IEntityMany<ICity>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ICity>): Promise<IEntityMany<ICity>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
