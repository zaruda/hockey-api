import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
} from '@nestjs/common';

@Catch()
export class AuthFilter implements ExceptionFilter {
  catch(_: ForbiddenException, host: ArgumentsHost) {
    host.switchToHttp().getResponse().redirect('/auth/login');
  }
}
