import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './Modules/books/books.module';
import { BooksSchema } from './Mongo/Schemas/book.schema';

@Module({
  imports: [
    //importação de modulos para ficarem disponíveis na aplicação
    BooksModule,
    MongooseModule.forRoot('mongodb://localhost/biblioteca'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
