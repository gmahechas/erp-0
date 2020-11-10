import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CountryDocument } from '@ms100/modules/country/client/mongodb/country.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, ICountry, BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class CountryMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(CountryDocument.name) private readonly entityModel: Model<CountryDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ICountry>): Observable<IEntityMany<ICountry>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ICountry>): Promise<IEntityMany<ICountry>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
