import { Module } from '@nestjs/common';
import { Issuer, Strategy } from 'openid-client';
import * as passport from 'passport';
import { AppConfigModule } from 'src/config/config.module';
import { AppConfigService } from 'src/config/config.service';
import { CLIENT, PASSPORT } from './auth.constants';
import { AuthController } from './auth.controller';

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      provide: CLIENT,
      useFactory: async (configService: AppConfigService) => {
        const OidcIssuer = await Issuer.discover(configService.oidcUri);
        return new OidcIssuer.Client({
          client_id: configService.oidcClientId,
          client_secret: configService.oidcClientSecret,
          redirect_uris: [configService.oidcRedirectUri],
          response_types: ['code'],
        });
      },
      inject: [AppConfigService],
    },
    {
      provide: PASSPORT,
      useFactory: (client) => {
        return passport.use(
          'sso',
          new Strategy({ client }, (_, userinfo, done) => {
            return done(null, userinfo);
          }),
        );
      },
      inject: [CLIENT],
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
