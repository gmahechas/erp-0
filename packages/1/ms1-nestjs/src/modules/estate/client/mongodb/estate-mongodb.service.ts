import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IEstate, BaseMongodbService, EstateDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class EstateMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(EstateDocument.name) private readonly entityModel: Model<EstateDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IEstate>): Observable<IEntityMany<IEstate>> {
    const searchManyAsync = async(): Promise<IEntityMany<IEstate>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }

}
