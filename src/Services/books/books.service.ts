import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {
  constructor(private bookRepository: BookRepository) {}

  async saveBook(newBook: BookDTO): Promise<BookDTO> {
    // A notação : Promise<BookDTO> na frente do método indica o tipo da função,
    // que ela vai retornar um elemento desse tipo, sendo assim, é obrigatorio usar o return na função.

    return await this.bookRepository.saveBook(newBook);
  }

  async getAllBooks(): Promise<BookDTO[]> {
    return await this.bookRepository.getAllBooks();
  }
}
