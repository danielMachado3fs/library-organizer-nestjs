import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AuthorDTO } from './author.dto';

export class BooksDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @Type(() => AuthorDTO) // valida que o tipo deve ser AuthorDTO
  @ArrayMinSize(1) // valida que o array deve ter no mínimo 1 elemento
  @ValidateNested({ each: true }) // faz as validações da classe principal
  //que nesse caso é BooksDTO mas tambem faz as validações da classe AuthorDTO
  //o parâmetro {each:true} é para fazer a validação da classe AuthorDTO em cada elemento do array
  readonly althor: AuthorDTO[];

  @IsString()
  @IsNotEmpty()
  readonly language: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly releaseYear: number;

  @IsString()
  @IsNotEmpty()
  readonly publisher: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly pages: number;
}
