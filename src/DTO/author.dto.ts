import { IsNotEmpty, IsString } from 'class-validator';

export class AuthorDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly surname: string;
}
