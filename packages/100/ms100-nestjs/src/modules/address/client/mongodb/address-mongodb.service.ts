import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AddressDocument } from '@ms100/modules/address/client/mongodb/address.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, IAddress , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class AddressMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(AddressDocument.name) private readonly entityModel: Model<AddressDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IAddress>): Observable<IEntityMany<IAddress>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IAddress>): Promise<IEntityMany<IAddress>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
