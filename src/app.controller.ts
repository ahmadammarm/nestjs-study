/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    // decorator: informasi tambahan (metadata) yang biasanya diawali dengan @
    // decorator digunakan di Class, Function, Constructor, dan Parameter
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    
    @Post()
    createHello(): string {
        return this.appService.postHello();
    }
}
