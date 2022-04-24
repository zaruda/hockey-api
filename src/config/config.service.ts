import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get rabbitMqUri(): string {
    return this.configService.get<string>('RABBITMQ_URI');
  }

  get port(): number {
    return this.configService.get<number>('PORT', 3000);
  }
}
