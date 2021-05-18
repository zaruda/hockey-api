import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { GOAL_SERVICE } from './goal.constants';

export default {
  provide: GOAL_SERVICE,
  useFactory: (configService: ConfigService) =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.get('RABBITMQ_URI')],
        queue: 'goals',
        queueOptions: {
          durable: false,
        },
      },
    }),
  inject: [ConfigService],
};
