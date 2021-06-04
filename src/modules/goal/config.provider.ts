import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { GOAL_SERVICE } from './goal.constants';
import { AppConfigService } from '../../config/config.service';

export default {
  provide: GOAL_SERVICE,
  useFactory: (configService: AppConfigService) =>
    ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [configService.rabbitMqUri],
        queue: 'goals',
        queueOptions: {
          durable: true,
        },
      },
    }),
  inject: [AppConfigService],
};
