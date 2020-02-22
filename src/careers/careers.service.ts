import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
// import { Book } from './interfaces/book.interface';
// import { BookInput } from './inputs/book.input';

const file: string = 'CareersService'

@Injectable()
export class CareersService {

  async findAll(): Promise<any> {
    Logger.debug(`in ${file} - get all careers`);
    const data = (
      await axios.get('https://platform-dev.api.auzmor.com/careers/06188efdcc39477d9c2ffb2dc0ab2d4d')
    ).data;
    return data;
  }

}