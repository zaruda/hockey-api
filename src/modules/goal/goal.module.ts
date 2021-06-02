import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';
import ConfigProvider from './config.provider';
import { AppConfigModule } from 'src/config/config.module';

@Module({
  imports: [AppConfigModule],
  controllers: [GoalController],
  providers: [ConfigProvider],
})
export class GoalModule {}
