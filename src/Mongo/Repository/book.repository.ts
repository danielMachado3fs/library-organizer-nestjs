/**
 * Essa classe serve para se comunicar com o banco através dos Model
 * Ela recebe o elemento do service, passa ele no Model(interface) e para o banco.
 */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from '../Interfaces/book.interface';

@Injectable()
export class BookRepository {
  constructor(@InjectModel('book') private readonly bookModel: Model<Book>) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    const savedBook = new this.bookModel(newBook);
    return await savedBook.save();
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.bookModel
      .find({}, { __v: false })
      .sort({ name: +1 })
      .exec();
  }

  //   async getBookByName(name: string): Promise<Book> {
  //     return await this.bookModel.find({ name: name }, { __v: false });
  //   }
}