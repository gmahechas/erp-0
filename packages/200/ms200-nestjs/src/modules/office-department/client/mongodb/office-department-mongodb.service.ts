import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Observable, from } from 'rxjs';

import { IEntityMany, IOfficeDepartment , BaseMongodbService, OfficeDepartmentDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class OfficeDepartmentMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(OfficeDepartmentDocument.name) private readonly entityModel: Model<OfficeDepartmentDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IOfficeDepartment>): Observable<IEntityMany<IOfficeDepartment>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<IOfficeDepartment>): Promise<IEntityMany<IOfficeDepartment>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
