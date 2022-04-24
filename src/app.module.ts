import { Module } from '@nestjs/common';
import { GoalModule } from 'src/modules/goal/goal.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AuthModule, GoalModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
