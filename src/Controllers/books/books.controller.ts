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

  @Get(':id')
  getBookById(@Param('id', ParseIntPipe) id) {
    return 'book';
  }

  @Post()
  saveBook(@Body() book: BookDTO) {
    return this.booksService.saveBook(book);
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
