import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  ICity,
  BaseMongodbService,
  CityDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class CityMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(CityDocument.name)
    private readonly entityModel: Model<CityDocument>,
  ) {
    super(entityModel);
  }

  searchMany(data: IEntityMany<ICity>): Observable<IEntityMany<ICity>> {
    const searchManyAsync = async (): Promise<IEntityMany<ICity>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
