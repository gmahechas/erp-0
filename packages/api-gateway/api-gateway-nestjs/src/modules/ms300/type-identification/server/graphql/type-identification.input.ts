import { InputType, Field, ID } from '@nestjs/graphql';

import { ITypeIdentification } from '@gmahechas/common-nestjs';

@InputType()
export class TypeIdentificationCreateInput implements Partial<ITypeIdentification> {
  @Field() typeIdentificationDescription: string;
  @Field() typeIdentificationCode: string;
}

@InputType()
export class TypeIdentificationSearchInput implements Partial<ITypeIdentification> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) typeIdentificationDescription: string;
  @Field({ nullable: true }) typeIdentificationCode: string;
}

@InputType()
export class TypeIdentificationUpdateInput implements Partial<ITypeIdentification> {
  @Field() id: string;
  @Field({ nullable: true }) typeIdentificationDescription: string;
  @Field({ nullable: true }) typeIdentificationCode: string;
}

@InputType()
export class TypeIdentificationDeleteInput implements Partial<ITypeIdentification> {
  @Field() id: string;
}