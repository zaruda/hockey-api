import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GoalModule } from 'src/modules/goal/goal.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), GoalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
