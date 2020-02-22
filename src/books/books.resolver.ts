import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { BooksService } from "./books.service";
import { BookType } from "./dto/create-books.dto";
import { BookInput } from "./inputs/book.input";

@Resolver()
export class BookResolver {
  constructor(private readonly booksService: BooksService) { }

  @Query(() => String)
  async hello() {
    return 'hello from graphql'
  }

  @Query(() => [BookType])
  async getAllBooks() {
    return this.booksService.findAll();
  }

  @Query(() => BookType)
  async getBookById(@Args('id') id: string) {
    return this.booksService.findById(id);
  }

  @Mutation(() => BookType)
  async addBook(@Args('input') input: BookInput) {
    return this.booksService.create(input);
  }

  @Mutation(() => BookType)
  async updateBookById(@Args('id') id: string, @Args('input') input: BookInput) {
    return this.booksService.updateById(id, input);
  }

  @Mutation(() => BookType)
  async deleteBookById(@Args('id') id: string) {
    return this.booksService.deleteById(id);
  }
}