import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AwardPointsDTO } from './dto/award-points.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { ScoreEntity } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(ScoreEntity)
    private readonly scoreRepository: Repository<ScoreEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async awardPoints(awardPointsDTO: AwardPointsDTO) {
    const score = new ScoreEntity();
    score.awarded_points = awardPointsDTO.awarded_points;

    const awardedUserEntity = await this.userRepository.findOne(
      awardPointsDTO.awarded_user,
    );

    score.user = awardedUserEntity;

    const scoreEntity = await this.scoreRepository.save(score);

    awardedUserEntity.points.push(scoreEntity);

    await this.userRepository.save(awardedUserEntity);
    return scoreEntity;
  }

  findAll() {
    return `This action returns all scores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} score`;
  }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}
