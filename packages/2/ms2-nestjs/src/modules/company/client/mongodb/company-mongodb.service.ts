import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import {
  IEntityMany,
  ICompany,
  BaseMongodbService,
  CompanyDocument,
} from '@gmahechas/common-nestjs';

@Injectable()
export class CompanyMongodbService extends BaseMongodbService() {
  constructor(
    @InjectModel(CompanyDocument.name)
    private readonly entityModel: Model<CompanyDocument>,
  ) {
    super(entityModel);
  }

  searchMany(data: IEntityMany<ICompany>): Observable<IEntityMany<ICompany>> {
    const searchManyAsync = async (): Promise<IEntityMany<ICompany>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }
}
