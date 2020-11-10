import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { EstateDocument } from '@ms100/modules/estate/client/mongodb/estate.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IEstate, BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class EstateMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(EstateDocument.name) private readonly entityModel: Model<EstateDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IEstate>): Observable<IEntityMany<IEstate>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IEstate>): Promise<IEntityMany<IEstate>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
