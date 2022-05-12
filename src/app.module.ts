import { Module } from '@nestjs/common';
import { BooksModule } from './Modules/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
