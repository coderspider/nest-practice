import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class JobType {

  @Field(() => ID)
  readonly id: string;

  @Field()
  readonly title: string;

  @Field(() => Int)
  readonly ISBN: number;

  @Field()
  readonly Author: string;
}