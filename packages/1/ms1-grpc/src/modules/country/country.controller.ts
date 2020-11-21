import grpc from 'grpc';

export default class CountryController {

  async createOne(call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>) {
    const { id, countryName, countryCode } = call.request.entity;
    callback(null, { entity: { id, countryName, countryCode } });
  }
}