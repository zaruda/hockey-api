import { Module } from '@nestjs/common';
import { GoalController } from './goal.controller';
import { AppConfigModule } from 'src/config/config.module';
import GoalService from './goal.service';

@Module({
  imports: [AppConfigModule],
  controllers: [GoalController],
  providers: [GoalService],
})
export class GoalModule {}
