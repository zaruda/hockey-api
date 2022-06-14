import { League } from 'src/modules/leagues/entities/league.entity';
import { Player } from 'src/modules/players/entities/player.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'int', nullable: true })
  leagueId: number;

  @ManyToOne(() => League, { eager: true })
  @JoinColumn({ name: 'leagueId' })
  league: League;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
