import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { CompanyDocument } from '@ms200/modules/company/client/mongodb/company.schema';

import { Observable, from } from 'rxjs';

import { IEntityMany, ICompany , BaseMongodbService } from '@gmahechas/common-nestjs';

@Injectable()
export class CompanyMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(CompanyDocument.name) private readonly entityModel: Model<CompanyDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ICompany>): Observable<IEntityMany<ICompany>> {
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ICompany>): Promise<IEntityMany<ICompany>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
