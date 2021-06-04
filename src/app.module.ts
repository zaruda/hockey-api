import { Module } from '@nestjs/common';
import { GoalModule } from 'src/modules/goal/goal.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, GoalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
