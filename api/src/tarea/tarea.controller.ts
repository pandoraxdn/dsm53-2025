import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from "@nestjs/common";
import { TareaService } from "./tarea.service";
import { CreateTareaDto } from "./dto/create-tarea.dto";
import { UpdateTareaDto } from "./dto/update-tarea.dto";

@Controller('tarea')
export class TareaController{

    constructor( private readonly tareaService: TareaService ){}

    @Post()
    create( @Body( new ValidationPipe() ) createTareaDto: CreateTareaDto ){
        return this.tareaService.create(createTareaDto);
    }

    @Get()
    findAll(){
        return this.tareaService.findAll();
    }

    @Get(':id')
    findOne( @Param('id') id: string ){
        return this.tareaService.findOne( id );
    }

    @Patch(':id')
    update( @Param('id') id: string, @Body( new ValidationPipe() ) updateTareaDto: UpdateTareaDto){
        return this.tareaService.update(id, updateTareaDto);
    }

    @Delete(':id')
    remove( @Param('id') id: string ){
        this.tareaService.delete(id);
    }
}
