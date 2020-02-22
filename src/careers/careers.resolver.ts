import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { CareersService } from "./careers.service";
import { JobType } from "./dto/careers.dto";
// import { BookInput } from "./inputs/book.input";

@Resolver()
export class CareersResolver {
  constructor(private readonly careersService: CareersService) { }

  @Query(() => String)
  async hello() {
    return 'hello from graphql'
  }

  @Query(() => [JobType])
  async getAllBooks() {
    return this.careersService.findAll();
  }
}