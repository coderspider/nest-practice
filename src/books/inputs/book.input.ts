import { InputType, Field, Int } from "type-graphql";

@InputType()
export class BookInput {
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly ISBN: number;
  @Field()
  readonly Author: string;
}