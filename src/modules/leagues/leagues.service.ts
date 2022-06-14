import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { League } from './entities/league.entity';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectRepository(League) private leaguesRepository: Repository<League>,
  ) {}
  create(createLeagueDto: CreateLeagueDto) {
    return this.leaguesRepository.save(createLeagueDto);
  }

  findAll() {
    return this.leaguesRepository.find();
  }

  findOne(id: number) {
    return this.leaguesRepository.findOneOrFail(id);
  }

  update(id: number, updateLeagueDto: UpdateLeagueDto) {
    return `This action updates a #${id} league`;
  }

  remove(id: number) {
    return this.leaguesRepository.delete(id);
  }
}
