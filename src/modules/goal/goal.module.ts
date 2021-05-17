import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';
import configFactory from './configFactory';

@Module({
  imports: [],
  controllers: [GoalController],
  providers: [configFactory],
})
export class GoalModule {}
