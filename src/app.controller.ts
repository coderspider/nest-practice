import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

const file = 'App Controller'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Object {
    return this.appService.getHello();
  }

  @Get('/careers')
  getCareers(): object {
    Logger.debug(`in ${file} - get all careers`)
    return this.appService.getCareers();
  }
}
