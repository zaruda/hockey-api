import { Controller, Get, Post, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('GOAL_SERVICE') private client: ClientProxy) {}

  @Get('/')
  getAllGoals(): Observable<string> {
    return this.client.send<string>('get-all', {});
  }

  @Post('create')
  getHello(): Observable<string> {
    return this.client.send<string>('create', { date: Date.now() });
  }
}
