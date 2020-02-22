import { Module } from '@nestjs/common';
import { CareersResolver } from './careers.resolver';
import { CareersService } from './careers.service';

@Module({
  imports: [],
  providers: [CareersResolver, CareersService],
})
export class CareersModule { }
