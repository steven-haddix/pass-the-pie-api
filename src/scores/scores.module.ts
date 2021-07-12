import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { ScoreEntity } from './entities/score.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreEntity, UserEntity])],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScoresModule {}
