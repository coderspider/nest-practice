import { Injectable, HttpService, Logger } from '@nestjs/common';
import axios from 'axios';

const file = 'App Service'

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello from Nest!';
  }

  async getCareers(): Promise<any> {
    Logger.debug(`in ${file} - get all careers`)
    const data = (
      await axios.get('https://platform-dev.api.auzmor.com/careers/06188efdcc39477d9c2ffb2dc0ab2d4d')
    ).data;
    return data;
    // return 'HELLO';
  }
}
