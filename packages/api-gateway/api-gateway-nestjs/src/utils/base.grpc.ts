import { Provider } from '@nestjs/common';
import { ClientProxyFactory, Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

export const baseGrpc = (provide: string, { options }: GrpcOptions): Provider => ({
  provide,
  useFactory: (): ClientProxyFactory => {
    return ClientProxyFactory.create({
      transport: Transport.GRPC,
      options: { ...options, protoPath: join(__dirname, '../../node_modules/@gmahechas/common-nestjs/src/grpc/protos/', options.protoPath.toString()) }
    });
  }
})