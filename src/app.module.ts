import { Module } from '@nestjs/common';
import { GoalModule } from 'src/modules/goal/goal.module';

@Module({
  imports: [GoalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
