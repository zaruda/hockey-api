import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

const goalMicroservice = ClientsModule.register([
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
  imports: [goalMicroservice],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
