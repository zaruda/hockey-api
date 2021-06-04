import { Controller, Get, UseGuards, Session } from '@nestjs/common';
import { SSOAuthGuard } from './sso-auth.guard';
import { User } from 'src/decorators/user.decorator';
// import { JWTAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor() {
    console.log('AuthController created');
  }

  @Get('login')
  @UseGuards(SSOAuthGuard)
  login() {
    return;
  }

  @Get('callback')
  @UseGuards(SSOAuthGuard)
  async callback(@User() user: any, @Session() session: Record<string, any>) {
    session.user = user;

    return user;
  }
}
