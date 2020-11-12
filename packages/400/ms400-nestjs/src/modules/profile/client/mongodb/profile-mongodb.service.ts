import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { IEntityMany, IProfile , BaseMongodbService, ProfileDocument } from '@gmahechas/common-nestjs';

@Injectable()
export class ProfileMongodbService extends BaseMongodbService() {

  constructor(
    @InjectModel(ProfileDocument.name) private readonly entityModel: Model<ProfileDocument>
  ) { super(entityModel); }

  searchMany(data: IEntityMany<IProfile>): Observable<IEntityMany<IProfile>> {
    const searchManyAsync = async(): Promise<IEntityMany<IProfile>> => {
      const dataEntities = data.entities ? data.entities : [{}];
      return { entities: await this.entityModel.find({ $or: dataEntities }) };
    };
    return from(searchManyAsync());
  }

}

