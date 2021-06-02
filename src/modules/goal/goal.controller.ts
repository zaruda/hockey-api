import {
  Controller,
  Get,
  Post,
  Inject,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GOAL_SERVICE } from './goal.constants';

type GoalEntity = {
  date: string;
};

type CreateGoalEntity = GoalEntity;

type UpdateGoalEntity = Partial<GoalEntity>;

@Controller('goals')
export class GoalController {
  constructor(@Inject(GOAL_SERVICE) private service: ClientProxy) {}

  @Get()
  async getAllGoals(): Promise<GoalEntity[]> {
    return await this.service.send('get', {}).toPromise();
  }

  @Post()
  create(@Body() goal: CreateGoalEntity): Observable<CreateGoalEntity> {
    return this.service.send('create', goal);
  }

  @Get(':id')
  async getGoalById(@Param('id') id: string): Promise<GoalEntity> {
    return await this.service.send('getById', id).toPromise();
  }

  @Patch(':id')
  updateGoalById(
    @Param('id') id: string,
    @Body() goal: Partial<UpdateGoalEntity>,
  ): Observable<GoalEntity> {
    return this.service.send('updateById', { id, goal });
  }

  @Delete(':id')
  deleteGoalById(@Param('id') id: string): Observable<void> {
    return this.service.send('deleteById', id);
  }
}
