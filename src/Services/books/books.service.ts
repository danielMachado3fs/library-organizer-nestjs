import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { OptionsDTO } from 'src/DTO/options.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private bookRepository: BookRepository) {}

  async saveBook(newBook: BookDTO): Promise<Book> {
    // A notação : Promise<BookDTO> na frente do método indica o tipo da função,
    // que ela vai retornar um elemento desse tipo, sendo assim, é obrigatorio usar o return na função.

    return await this.bookRepository.saveBook(newBook);
  }

  async getAllBooks(): Promise<Book[]> {
    const allBooks = await this.bookRepository.getAllBooks();
    if (!allBooks.length) {
      throw Error('Ainda não há livros cadastrados!');
    }
    return allBooks;
  }

  async getBooksByAuthorName(authorName: string) {
    console.log(authorName);
    const authorNameArray = authorName.split(' ');
    const books = await this.bookRepository.getBooksByAuthorName(
      authorNameArray,
    );
    if (!books.length) {
      throw Error('Nenhum livro deste autor foi encontrado!');
    }
    return books;
  }

  async getBookByOptions(options: OptionsDTO) {
    let data = Object();
    if (options.name) {
      data.name = { $regex: options.name, $options: 'i' };
    }
    if (options.language) {
      data.language = { $regex: options.language, $options: 'i' };
    }
    if (options.releaseYear) {
      data.releaseYear = options.releaseYear;
    }
    if (options.publisher) {
      data.publisher = { $regex: options.publisher, $options: 'i' };
    }
    if (options.pages) {
      data.pages = options.pages;
    }
    const books = await this.bookRepository.getBookByOptions(data);
    if (!books.length) {
      throw Error('Nenhum livro encontrado!');
    }
    return books;
  }

  async getBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.getBookById(id);
    if (!book) {
      throw Error('Nenhum livro encontrado!');
    }
    return book;
  }

  async updateBook(bookID: string, book: BookDTO) {
    const isBookExists = await this.bookRepository.getBookById(bookID);

    if (!isBookExists) {
      throw Error('Livro não encontrado!');
    }
    const bookUpdated = await this.bookRepository.updateBook(bookID, book);
    if (!bookUpdated) {
      throw Error('Não foi possivel atualizar o livro!');
    }
    return bookUpdated;
  }

  async deleteBookById(id: string): Promise<Book> {
    const book = await this.bookRepository.deleteBookById(id);
    if (!book) {
      throw Error('Nenhum livro encontrado!');
    }
    return book;
  }
}
