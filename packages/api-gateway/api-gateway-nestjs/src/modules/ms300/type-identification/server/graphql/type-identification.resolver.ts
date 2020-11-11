import { Resolver } from '@nestjs/graphql';

import {
  TypeIdentificationType,
  typeIdentificationJoiSchema, BaseResolver,
  TypeIdentificationCreateInput, TypeIdentificationSearchInput,
  TypeIdentificationUpdateInput, TypeIdentificationDeleteInput
} from '@gmahechas/common-nestjs';

import { TypeIdentificationGrpcService } from '@api-gateway-nestjs/modules/ms300/type-identification/client/grpc/type-identification-grpc.service';

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
