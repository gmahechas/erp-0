import { Resolver } from '@nestjs/graphql';

import { typeIdentificationJoiSchema } from '@gmahechas/common-nestjs';

import { BaseResolver } from '@api-gateway-nestjs/utils/base.resolver';
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
