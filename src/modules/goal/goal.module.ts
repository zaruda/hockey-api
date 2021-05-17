import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';

const GoalMicroservice = ClientsModule.register([
  {
    name: 'GOAL_SERVICE',
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'goals',
      queueOptions: {
        durable: false,
      },
    },
  },
]);

@Module({
  imports: [GoalMicroservice],
  controllers: [GoalController],
  providers: [],
})
export class GoalModule {}
