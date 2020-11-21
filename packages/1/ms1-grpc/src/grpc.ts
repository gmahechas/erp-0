import grpc from 'grpc';

import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const packageDefinition = protoLoader.loadSync(path.join(__dirname, '..', 'node_modules', '@gmahechas/common-nodejs/src/modules/1/1.proto'), {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});

export const packageObject = grpc.loadPackageDefinition(packageDefinition) as any;