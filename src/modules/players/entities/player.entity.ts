import { IsDateString } from 'class-validator';
import { Team } from 'src/modules/teams/entities/team.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @IsDateString()
  dateOfBirth: string;

  @Column({ type: 'int', nullable: true })
  teamId: number;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinColumn({ name: 'teamId' })
  team: Team;
}
