import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookResolver } from './books.resolver';
import { BookSchema } from './books.schema';
import { BooksService } from './books.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Books', schema: BookSchema }])],
  providers: [BookResolver, BooksService],
})
export class BooksModule { }
