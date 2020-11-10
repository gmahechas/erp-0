import { Resolver } from '@nestjs/graphql';

import { typePersonJoiSchema, BaseResolver } from '@gmahechas/common-nestjs';

import { TypePersonGrpcService } from '@api-gateway-nestjs/modules/ms300/type-person/client/grpc/type-person-grpc.service';
import { TypePersonType } from '@api-gateway-nestjs/modules/ms300/type-person/server/graphql/type-person.type';

import {
  TypePersonCreateInput, TypePersonSearchInput,
  TypePersonUpdateInput, TypePersonDeleteInput
} from '@api-gateway-nestjs/modules/ms300/type-person/server/graphql/type-person.input';

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
