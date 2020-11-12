import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IOffice , BaseMongodbService, OfficeDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class OfficeMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(OfficeDocument.name) private readonly entityModel: Model<OfficeDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IOffice>): Observable<IEntityMany<IOffice>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IOffice>): Promise<IEntityMany<IOffice>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
