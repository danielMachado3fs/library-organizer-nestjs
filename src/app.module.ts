import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './Modules/books/books.module';

@Module({
  imports: [
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost/biblioteca'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
