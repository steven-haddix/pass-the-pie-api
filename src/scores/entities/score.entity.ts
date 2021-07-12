import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { IsNumber, IsDate } from 'class-validator';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('score')
export class ScoreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  awarded_points: number;

  @Column()
  @IsDate()
  awarded_date: Date;

  @ManyToOne(() => UserEntity, (user) => user.points)
  @JoinColumn()
  user: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.awarded_by)
  @JoinColumn()
  awarded_by: UserEntity;

  @BeforeInsert()
  async hashPassword() {
    this.awarded_date = new Date();
  }
}
