import { Schema } from 'mongoose';
import { AuthorSchema } from './author.schema';

/**
 * Schemas é como se fosse a estrutura(colunas) das tabelas do banco de dados relacional MySQL,
 * esse arquivo define as propriedades que o objeto deve ter para ser salvo no banco.
 */
export const BooksSchema = new Schema({
  name: String,
  author: [AuthorSchema],
  language: String,
  releaseYear: Number,
  publisher: String,
  pages: Number,
});
