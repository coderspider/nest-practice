import { ObjectType, Field, Int, ID } from 'type-graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class BookType {
  @ApiProperty()
  @Field(() => ID)
  readonly id: string;
  @ApiProperty()
  @Field()
  readonly title: string;
  @ApiProperty()
  @Field(() => Int)
  readonly ISBN: number;
  @ApiProperty()
  @Field()
  readonly Author: string;
}