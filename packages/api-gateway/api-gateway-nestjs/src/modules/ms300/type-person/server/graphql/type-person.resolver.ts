import { Resolver } from '@nestjs/graphql';

import {
  TypePersonType,
  typePersonJoiSchema, BaseResolver,
  TypePersonCreateInput, TypePersonSearchInput,
  TypePersonUpdateInput, TypePersonDeleteInput
} from '@gmahechas/common-nestjs';

import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms300/type-person/client/grpc/type-person-grpc.service';

@Resolver(() => TypePersonType)
export class TypePersonResolver extends BaseResolver(
    TypePersonType,
    TypePersonCreateInput, TypePersonSearchInput,
    TypePersonUpdateInput, TypePersonDeleteInput,
    'TypePerson', typePersonJoiSchema
  ) {

  constructor(
    private readonly typePersonGrpcService: TypePersonGrpcService,
  ) { super(typePersonGrpcService); }

}
