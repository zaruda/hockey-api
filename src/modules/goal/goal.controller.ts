import {
  Controller,
  Get,
  Post,
  Inject,
  Param,
  Body,
  Patch,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import GoalEntity from './entities/goal.entity';
import { CreateGoalDto, UpdateGoalDto } from './dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TimeoutInterceptor } from 'src/interceptor/timeout.interceptor';
import { GOAL_SERVICE } from './goal.constants';
import { firstValueFrom } from 'rxjs';

@Controller('goals')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor, TimeoutInterceptor)
export class GoalController {
  constructor(@Inject(GOAL_SERVICE) private service: ClientProxy) {}

  @Get()
  async getAllGoals(): Promise<GoalEntity[]> {
    const goals = await this.service.send('get', {}).toPromise();

    return goals.map((g) => new GoalEntity(g));
  }

  @Post()
  async create(@Body() goal: CreateGoalDto): Promise<GoalEntity> {
    const createdGoal = await this.service.send('create', goal).toPromise();

    return new GoalEntity(createdGoal);
  }

  @Get(':id')
  async getGoalById(@Param('id') id: string): Promise<GoalEntity> {
    const goal = await this.service.send('getById', id).toPromise();

    return new GoalEntity(goal);
  }

  @Patch(':id')
  async updateGoalById(
    @Param('id') id: string,
    @Body() goal: Partial<UpdateGoalDto>,
  ): Promise<GoalEntity> {
    const updatedGoalObservable = await this.service.send('updateById', {
      id,
      goal,
    });
    const updatedGoal = await firstValueFrom(updatedGoalObservable);

    return new GoalEntity(updatedGoal);
  }

  @Delete(':id')
  async deleteGoalById(@Param('id') id: string): Promise<void> {
    return await this.service.send('deleteById', id).toPromise();
  }
}
