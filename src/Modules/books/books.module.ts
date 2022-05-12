import { Module } from '@nestjs/common';
import { BooksController } from 'src/controllers/books/books.controller';
import { BooksService } from 'src/Services/books/books.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
