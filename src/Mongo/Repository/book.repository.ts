/**
 * Essa classe serve para se comunicar com o banco através dos Model
 * Ela recebe o elemento do service, passa ele no Model(interface) e para o banco.
 */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDTO } from 'src/DTO/books.dto';
import { OptionsDTO } from 'src/DTO/options.dto';
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

  async getBooksByAuthorName(authorName: string[]) {
    const books = await this.bookModel.find({
      $or: [
        { 'author.name': { $in: authorName } },
        { 'author.surname': { $in: authorName } },
      ],
    });

    return books;
  }

  async getBookByOptions(options: Object) {
    const books = await this.bookModel.find(options, { __v: false });
    return books;
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookModel.findById({ _id: id }, { __v: false });
    return book;
  }

  async deleteBookById(id: string): Promise<Book> {
    return await this.bookModel.findByIdAndDelete(id);
    /**
     * Essa função findByIdAndDelete usa a função nativa findOneAndDelete() para remover o objeto,
     * ela faz a mesma coisa que a findByIdAndRemove que usa a função nativa findOneAndRemove que foi
     * descontinuada(deprecated), por isso é mais recomendável usar a primeira.
     */
  }

  async updateBook(bookID: string, book: BookDTO) {
    return await this.bookModel.findByIdAndUpdate(bookID, book, {
      returnDocument: 'after',
    });
    /**
     * a opção findByIdAndUpdate retorna o objeto atualizado diferente da opção replaceOne
     * que não retorna o objeto atualizado em si
     * A opção returnDocument define se ela vai retornar o objeto antes de ser atualizado ou dpois */
  }
}
