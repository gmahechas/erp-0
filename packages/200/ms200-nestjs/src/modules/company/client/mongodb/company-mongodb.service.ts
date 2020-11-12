import { Injectable, Inject } from '@nestjs/common';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, ICompany , BaseMongodbService, CompanyDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class CompanyMongodbService extends BaseMongodbService() {

  constructor(
    @Inject(CompanyDocument.name) private readonly entityModel: Model<CompanyDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<ICompany>): Observable<IEntityMany<ICompany>> {
    console.log(CompanyDocument.name);
    return from(this._searchManyAsync(data));
  }

  async _searchManyAsync(data: IEntityMany<ICompany>): Promise<IEntityMany<ICompany>> {
    const dataEntities = data.entities ? data.entities : [{}];
    return { entities: await this.entityModel.find({ $or: dataEntities }) };
  }

}
