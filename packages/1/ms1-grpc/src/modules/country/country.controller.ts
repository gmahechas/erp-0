import grpc from 'grpc';

import { CountryMongo } from './country.mongo';

export default class CountryController {

  async createOne(call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>) {
    const { id, countryName, countryCode } = call.request.entity;

    const entity = CountryMongo.build({ countryName, countryCode });
    await entity.save();

    callback(null, { entity: { id, countryName, countryCode } });
  }
}