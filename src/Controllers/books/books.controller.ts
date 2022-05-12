import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksDTO } from 'src/DTO/books.dto';
import { BooksService } from 'src/Services/books/books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getBooks() {
    return 'todos os books';
  }

  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id) {
    return 'book';
  }

  @Post()
  setBook(@Body() book: BooksDTO) {
    console.log(book);
    return book;
  }

  @Patch()
  updateBook() {
    return 'book';
  }

  @Delete()
  deleteBook() {
    return 'book deleted';
  }
}
