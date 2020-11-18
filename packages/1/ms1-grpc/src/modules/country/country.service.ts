import grpc from 'grpc';

export default class CountryService {
  createOne(call: grpc.ServerUnaryCall<any>, callback: grpc.sendUnaryData<any>) {
    console.log(call.request.entity);
    const { id, countryName, countryCode } = call.request.entity;
    callback(null, { entity: { id, countryName, countryCode } });
  }
}