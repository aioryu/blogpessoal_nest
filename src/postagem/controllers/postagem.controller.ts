import { Postagem } from '../entities/postagem.entity';
import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PostagemService } from '../service/postagem.service';
import { Put, Delete } from '@nestjs/common/decorators';

@Controller("/postagens")
export class   PostagemController {
  constructor(private readonly postagemService: PostagemService) {}


    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll();
        }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem> {
        return this.postagemService.findById(id);
    }
  
   @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('titulo') titulo:string): Promise<Postagem[]> {
        return this.postagemService.findAllByTitulo(titulo);
    }
  @Post()
  @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }
    @Put()
    @HttpCode(HttpStatus.CREATED)

    @Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe) id: number) {
  return this.postagemService.delete(id);
}


}