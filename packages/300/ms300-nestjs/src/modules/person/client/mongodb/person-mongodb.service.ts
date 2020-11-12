import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IPerson , BaseMongodbService, PersonDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class PersonMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(PersonDocument.name) private readonly entityModel: Model<PersonDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IPerson>): Observable<IEntityMany<IPerson>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IPerson>): Promise<IEntityMany<IPerson>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
