import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';
import ConfigProvider from './config.provider';

@Module({
  imports: [],
  controllers: [GoalController],
  providers: [ConfigProvider],
})
export class GoalModule {}
