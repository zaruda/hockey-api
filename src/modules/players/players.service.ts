import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) readonly playersRepository: Repository<Player>,
  ) {}
  create(createPlayerDto: CreatePlayerDto) {
    return this.playersRepository.save(createPlayerDto);
  }

  findAll() {
    return this.playersRepository.find();
  }

  findOne(id: string) {
    return this.playersRepository.findOneOrFail(id);
  }

  update(id: string, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: string) {
    return this.playersRepository.delete(id);
  }
}
