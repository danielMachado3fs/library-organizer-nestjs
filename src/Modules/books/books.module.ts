import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from 'src/controllers/books/books.controller';
import { BookRepository } from 'src/Mongo/Repository/book.repository';
import { AuthorSchema } from 'src/Mongo/Schemas/author.schema';
import { BooksSchema } from 'src/Mongo/Schemas/book.schema';
import { BooksService } from 'src/Services/books/books.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'book', schema: BooksSchema }]),
    //MongooseModule.forFeature([{ name: 'author', schema: AuthorSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BookRepository],
})
export class BooksModule {}
