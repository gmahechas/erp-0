import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { config } from './utils/config';

import CountryController from './modules/country/country.controller';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '..', 'node_modules', '@gmahechas/common-nodejs/src/modules/1/1.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

export const packageObject = grpc.loadPackageDefinition(packageDefinition) as any;


const grpcServer = new grpc.Server();
grpcServer.addService(packageObject.country.CountryService.service, new CountryController())
grpcServer.bind('0.0.0.0:'.concat(config.grpc_port), grpc.ServerCredentials.createInsecure());

export { grpcServer };