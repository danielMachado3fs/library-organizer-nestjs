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

  @Post('getBookByOptions')
  getBookByOptions(@Body() options) {
    console.log(options);
    return this.booksService.getBookByOptions(options).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Get(':bookID')
  getBookById(@Param('bookID') id: string) {
    return this.booksService.getBookById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  saveBook(@Body() book: BookDTO) {
    return this.booksService.saveBook(book);
  }

  @Patch()
  updateBook() {
    return 'book';
  }

  @Delete(':bookID')
  deleteBookById(@Param('bookID') id: string) {
    return this.booksService.deleteBookById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
