import grpc from 'grpc';

import { config } from './utils/config';
import { packageObject } from './grpc';
import databaseConnections from './databases'

import CountryController from './modules/country/country.controller';

const bootstrap = async () => {
  await databaseConnections;
  const server = new grpc.Server();
  server.addService(packageObject.country.CountryService.service, new CountryController())
  server.bindAsync('0.0.0.0:'.concat(await config.grpc_port), grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
    server.start();
    console.log(`ms1 is listening on port ${port}`);
  });
};

bootstrap();