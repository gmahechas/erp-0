import { Module } from '@nestjs/common';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { AddressResolver } from '@api-gateway-nestjs/modules/ms1/address/server/graphql/address.resolver';
import { AddressGrpcService } from '@api-gateway-nestjs/modules/ms1/address/client/grpc/address-grpc.service';

@Module({
  providers: [grpcMs100, AddressResolver, AddressGrpcService],
})
export class AddressModule {}
