import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@UseGuards(JwtAuthGuard)
@Controller("/tema")
export class TemaController{
    constructor(private readonly TemaService: TemaService){}

//Get All
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Tema[]>{
        return this.TemaService.findAll()
    }

//Get ID
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id',ParseIntPipe) id:number): Promise<Tema>{
        return this.TemaService.findById(id)
    }

//Get Tema
    @Get('/Tema/:tema')
    @HttpCode(HttpStatus.OK)
    findByTema(@Param('tema')tema:string): Promise<Tema[]>{
        return this.TemaService.findByTema(tema)
    }

//Post
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tema: Tema): Promise<Tema>{
        return this.TemaService.create(tema)
    }

//Put
    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tema: Tema): Promise<Tema>{
        return this.TemaService.update(tema)
    }

//delete
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.TemaService.delete(id)
    }
}