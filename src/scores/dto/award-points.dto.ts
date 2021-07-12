import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AwardPointsDTO {
  @ApiProperty({
    description: 'User ID of the user to give points',
    example: 1,
  })
  @IsNotEmpty()
  awarded_user: number;

  @ApiProperty({ description: 'Number of points to award user', example: 2 })
  @IsNotEmpty()
  awarded_points: number;
}
