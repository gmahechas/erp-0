import { Module } from '@nestjs/common';

import { grpcMs100 } from '@api-gateway-nestjs/utils/grpc.providers';
import { CountryResolver } from '@api-gateway-nestjs/modules/ms1/country/server/graphql/country.resolver';
import { CountryGrpcService } from '@api-gateway-nestjs/modules/ms1/country/client/grpc/country-grpc.service';

@Module({
  providers: [
    grpcMs100,
    CountryResolver,
    CountryGrpcService
  ]
})
export class CountryModule { }