import { InputType, Field } from '@nestjs/graphql';

import { IMenu } from '@gmahechas/common-nestjs';

@InputType()
export class MenuCreateInput implements Partial<IMenu> {
  @Field() menuName: string;
  @Field() menuDescription: string;
  @Field() menuUri: string;
  @Field() menuOrder: number;
  @Field() menuIdParent: string;
}

@InputType()
export class MenuSearchInput implements Partial<IMenu> {
  @Field({ nullable: true }) id: string;
  @Field({ nullable: true }) menuName: string;
}

@InputType()
export class MenuUpdateInput implements Partial<IMenu> {
  @Field() id: string;
  @Field({ nullable: true }) menuName: string;
  @Field({ nullable: true }) menuDescription: string;
  @Field({ nullable: true }) menuUri: string;
  @Field({ nullable: true }) menuOrder: number;
  @Field({ nullable: true }) menuIdParent: string;
}

@InputType()
export class MenuDeleteInput implements Partial<IMenu> {
  @Field() id: string;
}
