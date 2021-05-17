import { Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { GOAL_SERVICE_NAME } from './constants';

@Controller()
export class GoalController {
  constructor(@Inject(GOAL_SERVICE_NAME) private client: ClientProxy) {}

  @Get('/')
  getAllGoals(): Observable<string> {
    return this.client.send<string>('get-all', {});
  }

  @Post('create')
  create(): Observable<string> {
    return this.client.send<string>('create', { date: Date.now() });
  }
}
