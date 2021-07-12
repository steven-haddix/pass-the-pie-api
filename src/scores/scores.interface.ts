import { ScoreEntity } from './entities/score.entity';

export interface ScoreData {
  score: ScoreEntity;
}

export interface ScoresRO {
  scores: ScoreEntity[];
}
