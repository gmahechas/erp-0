import { Resolver } from '@nestjs/graphql';

import { typeIdentificationJoiSchema, BaseResolver } from '@gmahechas/common-nestjs';

import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms300/type-identification/client/grpc/type-identification-grpc.service';
import { TypeIdentificationType } from '@api-gateway-nestjs/modules/ms300/type-identification/server/graphql/type-identification.type';

import {
  TypeIdentificationCreateInput, TypeIdentificationSearchInput,
  TypeIdentificationUpdateInput, TypeIdentificationDeleteInput
} from '@api-gateway-nestjs/modules/ms300/type-identification/server/graphql/type-identification.input';

@Resolver(() => TypeIdentificationType)
export class TypeIdentificationResolver extends BaseResolver(
    TypeIdentificationType,
    TypeIdentificationCreateInput, TypeIdentificationSearchInput,
    TypeIdentificationUpdateInput, TypeIdentificationDeleteInput,
    'TypeIdentification', typeIdentificationJoiSchema
  ) {

  constructor(
    private readonly typeIdentificationGrpcService: TypeIdentificationGrpcService,
  ) { super(typeIdentificationGrpcService); }

}
