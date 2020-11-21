import databaseConnections from './databases'
import { grpcServer } from './grpc.server';

const bootstrap = async () => {
  await databaseConnections;
  await grpcServer.start();
  console.log(`ms1 is listening`);
};

bootstrap();