import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('GOAL_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello(): Observable<string> {
    return this.client.send<string>('hi', 'hello world');
  }
}
