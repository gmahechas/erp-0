import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  ICountry,
  BaseMongodbService,
  CountryDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class CountryMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(CountryDocument.name)
    private readonly entityModel: Model<CountryDocument>,
  ) {
    super(entityModel);
  }

  searchMany(data: IEntityMany<ICountry>): Observable<IEntityMany<ICountry>> {
    const searchManyAsync = async (): Promise<IEntityMany<ICountry>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
