import { Inject, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, ICountry, BaseMongodbService, CountryDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class CountryMongodbService extends BaseMongodbService() {

  constructor(
    @Inject('COUNTRY_MODEL') private readonly entityModel: Model<CountryDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ICountry>): Observable<IEntityMany<ICountry>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ICountry>): Promise<IEntityMany<ICountry>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
