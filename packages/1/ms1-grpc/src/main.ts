import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

import CountryService from './modules/country/country.service';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'modules/1', '1.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const packageObject = grpc.loadPackageDefinition(packageDefinition) as any;

const bootstrap = async () => {
  const server = new grpc.Server();
  server.addService(packageObject.country.CountryService.service, new CountryService())
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error: Error | null, port: number) => {
    server.start();
    console.log(`ms1 is listening on port ${port}`);
  });
};

bootstrap();