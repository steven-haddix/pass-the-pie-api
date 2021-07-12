import { ScoreEntity } from '../scores/entities/score.entity';

export interface UserData {
  username: string;
  email: string;
  points: ScoreEntity[];
}

export interface UserRO {
  user: UserData;
}
