import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppConfigModule } from 'src/config/config.module';
import { AppConfigService } from 'src/config/config.service';

import { GoalModule } from './modules/goal/goal.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LeaguesModule } from './modules/leagues/leagues.module';
import { TeamsModule } from './modules/teams/teams.module';
import { PlayersModule } from './modules/players/players.module';
import { GamesModule } from './modules/games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: AppConfigService) => ({
        type: 'postgres',
        host: configService.dbHost,
        port: +configService.dbPort,
        username: configService.dbUsername,
        password: configService.dbPassword,
        database: configService.dbName,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [AppConfigService],
    }),
    AuthModule,
    GoalModule,
    UsersModule,
    LeaguesModule,
    TeamsModule,
    PlayersModule,
    GamesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
