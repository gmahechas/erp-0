import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Observable, from } from 'rxjs';

import { IEntityMany, ITypePerson , BaseMongodbService, TypePersonDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class TypePersonMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(TypePersonDocument.name) private readonly entityModel: Model<TypePersonDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ITypePerson>): Observable<IEntityMany<ITypePerson>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ITypePerson>): Promise<IEntityMany<ITypePerson>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
