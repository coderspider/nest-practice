import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { CareersService } from './careers/careers.service';
import { CareersModule } from './careers/careers.module';

@Module({
  imports: [
    BooksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    MongooseModule.forRoot('mongodb+srv://joel:darkmatter@cluster0-y18s2.mongodb.net/test?retryWrites=true&w=majority'),
    HttpModule,
    CareersModule
  ],
  controllers: [AppController],
  providers: [AppService, CareersService],
})
export class AppModule { }
