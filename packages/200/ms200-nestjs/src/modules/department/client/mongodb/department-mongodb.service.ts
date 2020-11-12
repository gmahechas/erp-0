import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IDepartment , BaseMongodbService, DepartmentDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class DepartmentMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(DepartmentDocument.name) private readonly entityModel: Model<DepartmentDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IDepartment>): Observable<IEntityMany<IDepartment>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IDepartment>): Promise<IEntityMany<IDepartment>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
