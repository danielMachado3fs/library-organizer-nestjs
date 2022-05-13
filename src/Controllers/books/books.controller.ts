import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { OptionsDTO } from 'src/DTO/options.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks().catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Get('getBooksByAuthorName/:authorName')
  getBooksByAuthorName(@Param('authorName') authorName: string) {
    return this.booksService.getBooksByAuthorName(authorName).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post('getBookByOptions')
  getBookByOptions(@Body() options: any) {
    return this.booksService.getBookByOptions(options).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Get('id/:bookID')
  getBookById(@Param('bookID') id: string) {
    return this.booksService.getBookById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  saveBook(@Body() book: BookDTO) {
    return this.booksService.saveBook(book);
  }

  @Patch(':bookID')
  updateBook(@Param('bookID') bookID: string, @Body() book: BookDTO) {
    return this.booksService.updateBook(bookID, book).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(':bookID')
  deleteBookById(@Param('bookID') id: string) {
    return this.booksService.deleteBookById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
