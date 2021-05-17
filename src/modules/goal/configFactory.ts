import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { GOAL_SERVICE_NAME } from './constants';

export default {
  provide: GOAL_SERVICE_NAME,
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
