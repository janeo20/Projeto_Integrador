import { LocalAuthGuard } from './../guard/local-auth.guard';
import { AuthService } from './../service/auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from '../entities/usuariologin.entity';

@Controller('/auth')
export class AtuhController {
    constructor( private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async login(@Body() user: UsuarioLogin): Promise<any> {
        return this.authService.login(user)
    }
}