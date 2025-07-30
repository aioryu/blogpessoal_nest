import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/tema.module';
import { PostagemModule } from './postagem/postagem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:  'localhost',
      port:  3306,
      username: 'root',
      password: 'halle1021',
      database: 'db_blogpessoal',
      entities: [Postagem, Tema],
      synchronize: true,
      logging: true,
     
    }),
    PostagemModule,
    TemaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
