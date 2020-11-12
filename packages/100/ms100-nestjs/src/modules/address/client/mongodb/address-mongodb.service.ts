import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IAddress , BaseMongodbService, AddressDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class AddressMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(AddressDocument.name) private readonly entityModel: Model<AddressDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IAddress>): Observable<IEntityMany<IAddress>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IAddress>): Promise<IEntityMany<IAddress>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
