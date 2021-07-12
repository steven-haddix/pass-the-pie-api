import { PartialType } from '@nestjs/swagger';
import { AwardPointsDTO } from './award-points.dto';

export class UpdateScoreDto extends PartialType(AwardPointsDTO) {}
