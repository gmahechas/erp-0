import { Type, UsePipes } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { IEntityService, JoiSchema, GraphQLJoiValidationPipe } from '@gmahechas/common-nestjs';

export function BaseResolver<A, B, C, D, E, F>(
  typeRef: Type<B>,
  createRef: C, searchRef: D,
  updateRef: E, deleteRef: F,
  entityName: string, schemaValidation: JoiSchema
): any {

  @Resolver(() => typeRef, { isAbstract: true })
  abstract class BaseResolverHost {

    constructor(
      private readonly entityService: IEntityService<A>
    ) { }

    @Mutation(() => typeRef, { name: `createOne${entityName}` })
    @UsePipes(new GraphQLJoiValidationPipe(schemaValidation.create))
    createOne(@Args('entity', { type: () => createRef }) entity: C): Observable<Partial<A> | null> {
      return this.entityService.createOne({ entity }).pipe(pluck('entity'));
    }

    @Mutation(() => typeRef, { name: `updateOne${entityName}`, nullable: true })
    @UsePipes(new GraphQLJoiValidationPipe(schemaValidation.update))
    updateOne(@Args('entity', { type: () => updateRef }) entity: E): Observable<Partial<A> | null> {
      return this.entityService.updateOne({ entity }).pipe(pluck('entity'));
    }

    @Mutation(() => typeRef, { name: `deleteOne${entityName}`, nullable: true })
    @UsePipes(new GraphQLJoiValidationPipe(schemaValidation.delete))
    deleteOne(@Args('entity', { type: () => deleteRef }) entity: F): Observable<Partial<A> | null> {
      return this.entityService.deleteOne({ entity }).pipe(pluck('entity'));
    }

    @Query(() => typeRef, { name: `searchById${entityName}`, nullable: true })
    @UsePipes(new GraphQLJoiValidationPipe(schemaValidation.search))
    searchById(@Args('entity', { type: () => searchRef }) entity: D): Observable<Partial<A> | null> {
      return this.entityService.searchById({ entity }).pipe(pluck('entity'));
    }
    
    @Query(() => [typeRef], { name: `searchMany${entityName}`, nullable: true })
    searchMany(@Args('entities', { type: () => [searchRef] }) entities: D[]): Observable<Partial<A>[] | null> {
      return this.entityService.searchMany({ entities }).pipe(pluck('entities'));
    }

  }

  return BaseResolverHost;
}
