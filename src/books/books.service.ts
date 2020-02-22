import { Model, ObjectId } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './interfaces/book.interface';
import { BookInput } from './inputs/book.input';

const file: string = 'BookService'

@Injectable()
export class BooksService {
  constructor(@InjectModel('Books') private readonly booksModel: Model<Book>) { }

  async create(book: BookInput): Promise<Book> {
    Logger.debug(`in ${file} - create book input: ${JSON.stringify(book)}`);
    const createdBooks = new this.booksModel(book);
    return createdBooks.save();
  }

  async findAll(): Promise<Book[]> {
    Logger.debug(`in ${file} - find all books`);
    return this.booksModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    Logger.debug(`in ${file} - find book by id: ${id}`);
    return this.booksModel.findById(id);
  }

  async updateById(id: ObjectId, input: BookInput): Promise<Book> {
    Logger.debug(`in ${file} - update book by id: ${id}`);
    return this.booksModel.findOneAndUpdate({ '_id': id }, input, { new: true });
  }

  async deleteById(id: ObjectId): Promise<Book> {
    Logger.debug(`in ${file} - delete book by id: ${id}`);
    return this.booksModel.findByIdAndRemove({ '_id': id });
  }
}