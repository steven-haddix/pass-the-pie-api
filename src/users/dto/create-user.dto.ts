import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'testUser123' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'test.test@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  readonly password: string;
}
