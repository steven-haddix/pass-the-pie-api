import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
  } from 'typeorm';
  import { IsNumber, IsRFC3339 } from 'class-validator';
  import { UserEntity } from 'src/users/entities/user.entity';
  
  @Entity('score')
  export class ScoreEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    awarded_points: number;

    @Column()
    @IsRFC3339()
    awarded_date: number;

    @ManyToOne(() => UserEntity, user => user.points)
    @JoinColumn()
    user: UserEntity;

    @ManyToOne(() => UserEntity, user => user.awarded_by)
    @JoinColumn()
    awarded_by: UserEntity;
    
  }
  