import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IEstate, BaseMongodbService, EstateDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class EstateMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(EstateDocument.name) private readonly entityModel: Model<EstateDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IEstate>): Observable<IEntityMany<IEstate>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IEstate>): Promise<IEntityMany<IEstate>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
