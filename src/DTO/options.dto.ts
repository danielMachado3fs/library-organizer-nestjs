import { IsNumber, IsPositive, IsString } from 'class-validator';

export class OptionsDTO {
  name: string;
  language: string;
  releaseYear: number;
  publisher: string;
  pages: number;
}
