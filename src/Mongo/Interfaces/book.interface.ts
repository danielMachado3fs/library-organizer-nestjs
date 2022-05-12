import { Document } from 'mongoose';
import mongoose from 'mongoose';
import { AuthorDTO } from 'src/DTO/author.dto';

/**
 * Toda requisição feita ao banco do mongo, ele retorna um documento, esse arquivo pega o que vai estar
 * no documento que o banco vai retornar contendo as propriedades do objeto book.
 *
 * OBS: o tipo do ID do objeto é uma propriedade definida na biblioteca do mongoose.
 */
export interface Book extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly name: string;
  readonly author: AuthorDTO[];
  readonly language: string;
  readonly releaseYear: number;
  readonly publisher: string;
  readonly pages: number;
}
