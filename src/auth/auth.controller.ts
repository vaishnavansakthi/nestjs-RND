import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('api/v1/')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('auth/signup')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
  }

  @Post('auth/signin')
  signIn() {
    return this.authService.signIn();
  }
}
