import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
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

  async getBookByName(name: string): Promise<Book[]> {
    const books = await this.bookRepository.getBookByName(name);
    if (books) {
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

  async deleteBookById(id: string): Promise<Book> {
    return await this.bookRepository.deleteBookById(id);
  }
}
