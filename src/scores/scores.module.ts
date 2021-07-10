import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { ScoreEntity } from './entities/score.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ScoreEntity])],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScoresModule {}
