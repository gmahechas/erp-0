import grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, 'modules/1', '1.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

const packageObject = grpc.loadPackageDefinition(packageDefinition) as any;
const client = new packageObject.country.CountryService('0.0.0.0:50051', grpc.credentials.createInsecure())

const bootstrap = async () => {

  const request = {
    entity: {
      id: '123429829',
      countryName: 'Colombianos',
      countryCode: 'COL'
    }
  };

  client.createOne(request, (error: grpc.ServiceError | null, response: any) => {
    console.log('Este es el resultado:', response.entity);
  });
};

bootstrap();